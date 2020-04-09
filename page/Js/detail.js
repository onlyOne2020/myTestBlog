// info detail

let infoDetail = new Vue({
    el: '#info_detail',
    data: {
        info: []
    },
    created() {
        let bId = location.search.indexOf('?bId') > -1 ? location.search.split('=')[1] : "";
        if (bId == '-1' || bId == "") {
            return false;
        }
        axios.get('/queryDetail?bId=' + bId)
            .then(function (response) {
                infoDetail.info.push(response.data[0])
            })
            .catch(function (error) {
                throw new Error(error)
            });
    }
})

// common detail
let commonDetail=new Vue({
    el: '#common_detail',
    data:{
        bId:'',
        flag:true,
        commonInfo:[]
    },
    methods:{
        requestInfo(url, params, success) {
            axios.get(url + params)
                .then(function (response) {
                    success(response)
                })
                .catch(function (error) {
                    throw new Error(error)
                });
        },
        queryCommon(){
            this.bId=location.search.indexOf('?bId') > -1 ? location.search.split('=')[1] : "";
            let queryCommonUrl="/queryCommon";
            let params='?bId='+this.bId;
            this.requestInfo(queryCommonUrl,params,function(data){
                commonDetail.flag=true;
                if(data.data.length>0){
                    commonDetail.flag=false;
                }
                commonDetail.commonInfo=data.data;
            })
        }
    },
    created(){
        this.queryCommon();
    }
})


// info common
let infoCommon = new Vue({
    el: '#info_common',
    data: {
        codeImg: "",
        codeText:'',
        bId:'',
    },
    methods: {
        submit() {
            let bId=location.search.indexOf('?bId') > -1 ? location.search.split('=')[1] : "";
            let codeVal = this.$refs.code.value;
            let nameVal = this.$refs.name.value;
            let emailVal = this.$refs.email.value;
            let commonVal = this.$refs.text.value;
            let replyVal = this.$refs.reply.value;


            if (bId == '-1' || bId == "") {
                return false;
            }
            
            if (!nameVal || !emailVal || !commonVal || !codeVal) {
                alert('请完善必填项信息！')
                return false;
            } 
            if(codeVal != infoCommon.codeText){
                alert('输入的验证码不正确！')
                this.randomCode();
                return false;
            }else {
                // 评论
                let addCommonUrl = "/addCommon";
                let addCommonParams = '?bId=' + bId + '&name=' + nameVal + '&email=' + emailVal + '&replyId=' + replyVal + '&content=' + commonVal || "";
                this.requestInfo(addCommonUrl, addCommonParams, function (data) {
                    alert('评论成功！')
                    commonDetail.queryCommon();
                    infoCommon.reset();
                })
            }
        },
        reset() {
            infoCommon.$refs.code.value = '';
            infoCommon.$refs.name.value = '';
            infoCommon.$refs.text.value = '';
            infoCommon.$refs.email.value = '';
        },
        requestInfo(url, params, success) {
            axios.get(url + params)
                .then(function (response) {
                    success(response)
                })
                .catch(function (error) {
                    throw new Error(error)
                });
        },
        randomCode() {
            // 请求验证码
            let randomCodeUrl = "/randomCode";
            this.requestInfo(randomCodeUrl, "", function (data) {
                infoCommon.codeImg = data.data.data;
                infoCommon.codeText = data.data.text;
            })
        }
    },
    created() {
        this.randomCode();
    }
})
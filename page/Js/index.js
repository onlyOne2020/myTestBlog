// left every day
let everyDay = new Vue({
  el: '#every_day',
  data: {
    title: '每日一句',
    content: ""
  },
  created() {
    axios.get('/queryEveryDay', {
        params: {
          method: 'get'
        }
      })
      .then(function (response) {
        everyDay.content = response.data[0]["content"];
      })
      .catch(function (error) {
        throw new Error(error)
      })
  }
})

// left article list
let articlelist = new Vue({
  el: "#article_list",
  data: {
    curPage: 1,
    pageCount: 3,
    totalCount:10,
    articleList:[]
  },
  created() {
    this.getHomePage(this.curPage-1, this.pageCount);
  },
  methods: {
    getHomePage(curPage, pageCount) {
      axios.get("/queryHome?curPage=" + curPage + "&pageCount=" + pageCount, {
        params: {
          method: 'get'
        }
      }).then(function (response) {
        for (var i = 0; i < response.data[0].length; i++) {
          articlelist.articleList.push(response.data[0][i])
        }
        articlelist.totalCount=Math.ceil(response.data[1][0].count/articlelist.pageCount)*10;
      }).catch(function (error) {
        throw new Error(error)
      })
    },
    currentChange(curIndex){
          this.articleList=[];
          this.curPage=parseInt(curIndex * this.pageCount)-2;
          this.getHomePage(this.curPage-1, this.pageCount);
    }
  }
})
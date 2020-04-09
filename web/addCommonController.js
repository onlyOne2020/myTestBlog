var addCommonController=require('../dns/common/addCommonController.js')
var path=new Map();

function addCommon(req,res){
    let date=new Date()
    let {bId,name,email,replyId,content}=req.query;
    addCommonController(replyId,bId,name,email,content,date,function(data){
        if(data){
            res.status('200');
            res.send('添加成功');
            res.end()
        }
    })
}

path.set("/addCommon",addCommon)
module.exports.path=path;
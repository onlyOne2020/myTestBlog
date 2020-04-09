var dbUtil = require("../../util/dbUtil.js")

function queryDetail(bId,success) {
    let connetion = dbUtil.createConnection();
    let querySql = "select * from bg_article_list where id=?;"
    
    connetion.connect();
    connetion.query(querySql,bId,function(err,data){
        if(data){
            success(data)
        }else{
            throw new Error(err)
        }
    })  
    connetion.end();
}
module.exports=queryDetail;
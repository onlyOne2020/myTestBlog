var dbUtil = require("../../util/dbUtil.js")

function queryCommon(bId, success) {
    let connetion = dbUtil.createConnection();
    let querySql = "select * from  bg_common where bId=?"
       
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

module.exports=queryCommon;
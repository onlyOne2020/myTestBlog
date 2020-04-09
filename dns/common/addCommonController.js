var dbUtil = require("../../util/dbUtil.js")
function addCommon(replyId,bId,name,email,content,time, success) {
    let connetion = dbUtil.createConnection();
    let temp = [replyId,bId,name,email,content,time];
    let insertSql = "INSERT INTO bg_common (`replyId`,`bId`,`user_name`,`email`,`content`,`create_time`) VALUES(?,?,?,?,?,?);"
    
    connetion.connect();
    connetion.query(insertSql,temp,function(err,data){
        if(data){
            success(data)
        }else{
            throw new Error(err)
        }
    })
    connetion.end();
}
module.exports=addCommon;
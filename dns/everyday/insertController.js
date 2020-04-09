var dbUtil = require("../../util/dbUtil.js");

function insertEveryDay(content, time, success) {
    let connetion = dbUtil.createConnection();
    let temp = [content, time]
    let insertSql = "INSERT INTO bg_every_day (`content`,`create_time`) VALUES(?,?);"
    
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

module.exports=insertEveryDay;
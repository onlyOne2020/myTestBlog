var dbUtil = require("../../util/dbUtil.js")

function selectEveryDay(success) {
    let connetion = dbUtil.createConnection();
    let selectSql = "SELECT * FROM bg_every_day ORDER BY create_time DESC LIMIT 1;"
    
    connetion.connect();
    connetion.query(selectSql,function(err,data){
        if(data){
            success(data)
        }else{
            throw new Error(err)
        }
    })
    connetion.end();
}

module.exports=selectEveryDay;
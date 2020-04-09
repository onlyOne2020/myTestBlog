var dbUtil = require("../../util/dbUtil.js")

function queryHome(start,end,success) {
    let connetion = dbUtil.createConnection();
    let params=[start,end];
    let queryContentSql = "select * from bg_article_list limit ?,?;"
    let queryConutSql = "select count(*) as count from bg_article_list;"
    let responseData=[];
    
    connetion.connect();
    connetion.query(queryContentSql,params,function(err,data){
        if(data){
            responseData.push(data)
        
        }else{
            throw new Error(err)
        }
    })

    connetion.query(queryConutSql,function(err,data){
        if(data){
            responseData.push(data) 
            success(responseData)    
        }else{
            throw new Error(err)
        }
    })
    
    
    connetion.end();
}
module.exports=queryHome;
var globalConfig=require("../config.js")
var mysql=require('mysql');

function createConnection(){
    let connection=mysql.createConnection({
        host:'localhost',
        user:globalConfig["dbUser"],
        password:globalConfig["dbPassword"],
        port:globalConfig["dbPort"],
        database:globalConfig["database"]
    })
    return connection;
}

module.exports.createConnection=createConnection;


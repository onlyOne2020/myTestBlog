var express=require('express');
var bodyParser=require('body-parser')

var loaderWeb=require("./loaderWeb.js")
var globalConfig=require("./config");
var app=new express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static("./page"))
app.post("/editEveryDay",loaderWeb.get('/editEveryDay'))
app.get("/queryEveryDay",loaderWeb.get('/queryEveryDay'))
app.get("/queryHome",loaderWeb.get('/queryHome'))
app.get('/queryDetail',loaderWeb.get("/queryDetail"))
app.get('/addCommon',loaderWeb.get("/addCommon"))
app.get('/randomCode',loaderWeb.get("/randomCode"))
app.get('/queryCommon',loaderWeb.get("/queryCommon"))


app.listen(globalConfig["port"],globalConfig["ip"],function(){
    console.log("service start")
})
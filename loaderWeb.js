var fs=require("fs");
var path=require('path')
var globalConfig=require("./config");

var pathMap=new Map();

var webAllDir=fs.readdirSync(path.resolve(__dirname,globalConfig["webPath"]));
for(var i=0;i<webAllDir.length;i++){
    var temp=require("./"+globalConfig["webPath"]+"/"+webAllDir[i])
    if(temp.path){
        for(var [key,value] of temp.path){
            if(!pathMap.get(key)){
                pathMap.set(key,value)
            }else{
                throw new Error();
            }
        }
    }
}

module.exports=pathMap;











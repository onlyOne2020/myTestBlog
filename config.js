var fs=require('fs');
var path=require('path')

var globalConfig={};

var cfg=fs.readFileSync(path.resolve(__dirname,'server.cfg'));
var temp=cfg.toString().split("\n");

for(var i=0;i<temp.length;i++){
    globalConfig[temp[i].split("=")[0].trim()]=temp[i].split("=")[1].trim();
}

module.exports=globalConfig;
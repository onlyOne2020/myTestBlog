var insertEveryDay=require('../dns/everyday/insertController.js')
var selectEveryDay=require('../dns/everyday/selectController.js')
var path=new Map();

function editEveryDay(req,res){
    let date=new Date()
    insertEveryDay(Object.keys(req.body)[0],date,function(data){
        if(data){
            res.status('200');
            res.send('添加成功');
            res.end()
        }
    })
}

function queryEveryDay(req,res){
    selectEveryDay(function(data){
        if(data){
            res.status('200');
            res.send(data);
            res.end()
        }
    })
}

path.set("/editEveryDay",editEveryDay)
path.set("/queryEveryDay",queryEveryDay)
module.exports.path=path;
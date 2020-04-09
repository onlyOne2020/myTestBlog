var queryHomeController=require('../dns/renderHome/queryHomeController.js')
var queryDetailController=require('../dns/renderHome/queryDetailController.js')
var path=new Map();

function queryHome(req,res){
    let curPage=parseInt(req.query.curPage);
    let pageCount=parseInt(req.query.pageCount);
    queryHomeController(curPage,pageCount,function(data){
        if(data){
            res.status('200');
            res.send(data);
            res.end()
        }
    })
}
function queryDetail(req,res){
    let bId=parseInt(req.query.bId);
    queryDetailController(bId,function(data){
        if(data){
            res.status('200');
            res.send(data);
            res.end()
        }
    })
}

path.set("/queryHome",queryHome)
path.set("/queryDetail",queryDetail)
module.exports.path=path;
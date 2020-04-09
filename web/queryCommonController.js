var queryCommonController=require('../dns/common/queryCommonController.js');

var path=new Map();
function queryCommon(req,res){
    queryCommonController(req.query.bId,function(data){
        res.status(200);
        res.send(data)
        res.end();
    })
}

path.set("/queryCommon",queryCommon);
module.exports.path=path;
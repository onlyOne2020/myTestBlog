var captcha=require('svg-captcha')
var path=new Map();

function randomCode(req,res){
    var img=captcha.create({width:80,height:40})
    res.status(200,{"Content-Type":"image/svg+xml"})
    res.send(img)
    res.end()
}
path.set("/randomCode",randomCode)
module.exports.path=path;
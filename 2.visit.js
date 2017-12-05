var http=require('http');
var querystring=require('querystring');
var server=http.createServer(function(req,res){
    //当客户端访问服务器/visit路径的时候，会显示本客户
    if(req.url=='/visit'){
        var a=req.headers['cookie'];
        var b=querystring.parse(a,'; ');
        if(b.visit){
            b.visit=parseInt(b.visit)+1;
        }else{
            b.visit=1;
        }
        res.setHeader('Set-Cookie','visit='+b.visit);
        res.end('第'+b.visit+'次访问')



    }else{
        res.end()
    }
}).listen(8080)
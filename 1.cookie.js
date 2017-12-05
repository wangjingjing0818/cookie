var http=require('http');

var server=http.createServer(function(req,res){
    var url=req.url;
    // 如果url是cookie的话，要写入cookie给客户端
    if(url=='/write'){
        //通过响应头中的set-cookie想客户端种植
        res.setHeader('Set-Cookie','name=zfpx');
        res.end('write ok')
    }else if(url=='/read'){
        //客户端再次访问服务器的时候，会吧cookie通过请求头带会服务器
        res.end(req.headers.cookie)
    }
}).listen(8080)
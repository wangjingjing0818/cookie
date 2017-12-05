var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
//使用cookieParser中间件之后，会增加req.cookies属性；
app.use(cookieParser());
/*app.get('/write',function(req,res){
    //在express中写入cookie
   // res.setHeader('Set-Cookie','name=zfpx');
    //domain就是域名 规定此cookie归哪个域名，当想那个域名发请求的时候会吧次cookie发给服务器，除次域名之外一律不发；
    res.cookie('name','px',{
        domain:'a.zfpx.cn'
    })
    res.send('write ok')
})*/
app.get('/write',function(req,res){
    /*res.cookie('name','x',{
        path:'/read2'
    })*/
    res.cookie('name','x',{   // expires 设置一个绝对的实效时间，过期销毁
        expires:new Date(Date.now()+10*1000)
    })
   /* res.cookie('name','x',{   // maxAge 存活时间，最长有效期，过期销毁
        maxAge:20*1000
    })*/
    res.send('write ok')
})
app.get('/read',function(req,res){
    //req.cookies是cookieParser中间件提供的
    res.send(req.cookies)
})
/*app.get('/read2',function(req,res){
    res.send(req.cookies)
})*/
//统计客户端访问服务器的次数
app.get('/visit',function(req,res){
    var visit;
    if(req.cookies.visit){
        visit=parseInt(req.cookies.visit)+1
    }else{
        visit=1
    }
    //httpOnly表示此cookie不能通过js访问进行读写
    res.cookie('visit',visit,{httpOnly:true});//吧最新的写入客户端
    res.send('欢迎'+visit)

})
app.listen(8080);
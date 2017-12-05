var cookie='v=1; a=2'
var querystring=require('querystring');
//第二个字段是字段分隔符、
//第三个参数是属性名和属性值的分隔符
var obj=querystring.parse(cookie,'; ');
console.log(obj)
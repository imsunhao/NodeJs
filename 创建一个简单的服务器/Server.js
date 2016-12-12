/**
 * Created by 孙颢pc on 2016/12/12.
 */
var http=require("http");
var port=8088;
http.createServer(function (request,response) {
    console.log("有客户端的请求");
    console.log("客户端请求的资源为"+request.url);
    console.log("客户端请求的方法为"+request.method);

    response.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    response.write("12314124");
    response.end();
}).listen(port,function () {
    console.log("web服务器正在"+port+"端口运行");
});
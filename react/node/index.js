var http = require('http');
var path = require('path');
var fs = require('fs');

http.createServer(function (req, res) {
// 异步读取
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path.join(__dirname,'./cyberplayer/baidurtmp.html'), 'utf-8',function (err, data) {
        if (err) {
            return console.error(err);
        }
        res.end(data.toString());
    });

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain


    // 发送响应数据 "Hello World"

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
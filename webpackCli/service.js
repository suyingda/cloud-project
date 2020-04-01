const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const DIST_DIR = path.join(__dirname, "dist"); // 设置静态访问文件路径

const webpack = require('webpack');

const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require('webpack-hot-middleware');

const base = require('./webpack.base.config')
const dev = require('./webpack.config')
const ClientConfig = {...dev, ...base}

app.use('/dist', express.static('dist'));//将文件设置成静态


var complier = webpack(ClientConfig);
let devMiddleware = webpackDevMiddleware(complier, {
    publicPath: '/',
    quiet: true //向控制台显示任何内容
});
let hotMiddleware = webpackHotMiddleware(complier, {
    // publicPath: ClientConfig.output.publicPath,
    log: false,
    // inline:true,
    quiet: true,

});
app.use(devMiddleware)
app.use(hotMiddleware);
// app.use(express.static(DIST_DIR))
app.get("*", (req, res, next) => {
    // const filename = path.resolve(__dirname, 'index.html');
    let filename = path.join(__dirname , './index.html')
    console.log(filename)
    fs.readFile(filename, function (err, data) {
        res.end(data)
    })
  /*  complier.outputFileSystem.readFile('/index.html','utf8', (err, result) => {
        if (err) {
            return (next(err))
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })*/
    // var host = req.headers.host, ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // console.log("client ip:" + ip + ", host:" + host);
})


app.listen(33001, function () {
    console.log("successful localhost:" + 33001)
});


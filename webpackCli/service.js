const express = require('express');

const webpack = require('webpack');
const path = require('path');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const DIST_DIR = path.resolve(__dirname, "dist")// 设置静态访问文件路径;

const base = require('./webpack.base.config');
const config = require('./webpack.config');
const merge = { ...config, ...base }
const complier = webpack(merge);

app.use(webpackDevMiddleware(complier, {
    publicPath: './' || config.output.publicPath
}));
let hotMiddleware = webpackHotMiddleware(complier, {
    log: false,
    heartbeat: 2000,
})

app.use(hotMiddleware);
app.use(express.static(DIST_DIR));
app.get("*", (req, res, next) =>{
    const filename = path.join(DIST_DIR, 'index.html');

    complier.outputFileSystem.readFile(filename, (err, result) =>{
        if(err){
            return(next(err))
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    })
})
app.listen(3000, function () {
    console.log('success service')
})
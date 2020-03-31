const http = require('http');

http.createServer(function (req, res) {
    process.nextTick(() => {
        // console.log('nextTick', this)
    })
   
    console.log(1)

    res.end('66666')
}).listen(3000, function () {
    console.log('start server succcess port----3000')
})
 setTimeout(function(){
    console.log(this,'setTimeout')
})
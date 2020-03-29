const http = require('http');

const server = http.createServer((req, res) => {
        const getUrl = req.url;
        // res.header("Content-Type", "text/html; charset=utf-8")
        // res.writeHead(200, {
        //     "Content-Type": 'text/plain',
        //     'charset': 'UTF-8',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
        // });
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
        });//只需要设置响应头的编码格式就好

        if (getUrl === '/cityChartData') {
            const BackData = {
                // area: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Squn'],
                rateChartData: {
                    series: [
                        {
                            name: '出勤率',
                            data: [88, 100, 22, 1, 99]
                        },
                        {
                            name: '巡更完成率',
                            data: [88, 100, 22, 1, 99]
                        },
                        {
                            name: '执行结案率',
                            data: [88, 100, 22, 1, 99]
                        },
                        {
                            name: '督办整改率',
                            data: [1, 2, 3, 1, 4]
                        },
                        {
                            name: '处罚结案率',
                            data: [1, 2, 3, 1, 4]
                        },
                    ],
                },
                recordChartData: {

                    series: [
                        {
                            name: '出勤率',
                            data: [88, 100, 232, 121, 99, 100, 222, 133, 24]
                        },
                    ],

                },
                redYellowdChartData: {

                    series: [
                        {
                            name: '出勤率',
                            data: [128, 100, 232, 121, 199, 100, 222, 133, 124]
                        },
                    ],

                },
                penaltyChartData: {

                    series: [
                        {
                            name: '出勤率',
                            data: [100, 112, 332, 24, 5, 6,3,1,2]
                        },
                    ],

                },


            };
            res.write(JSON.stringify(BackData));
        }
        res.end();
    }
);
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000, () => {
    console.log('start service')
});

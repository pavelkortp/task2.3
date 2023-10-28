var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(3000);

server.on('request', function (req: any, res: any) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data: any) {
        body += data;
    });

    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    });
});

console.log('Listening on port 3000');
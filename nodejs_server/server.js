var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.xhtml', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log("server is now running at port 8080")
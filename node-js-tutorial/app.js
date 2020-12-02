const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    console.log('url', req.url)

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
});

server.listen(3001, '127.0.0.1');

var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/data'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Hello World'}));
        res.end();
    }
    else{
        res.write(JSON.stringify({message: 'Invalid API Path'}));
        res.end();
    }
});

server.listen(8080);
console.log('Node js server at port 8080 is running...')
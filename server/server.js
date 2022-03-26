var http = require('http')
var server = http.createServer(function (req, res) {});
server.listen(8080);
console.log('Node.js web server at port 8080 is running..')
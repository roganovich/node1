/**
Созадем службу которая слушает запросы по определенному порту
*/
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('URL request: ' + req.url);
  res.writeHead(200,{
    'ContentType' : 'text/plain; charset: utf-8'
  });
  res.end('Hello World');
});

server.listen(3000,'127.0.0.99');
console.log('Check 127.0.0.99:3000');

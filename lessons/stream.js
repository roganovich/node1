/**
Созадем службу которая слушает запросы по определенному порту
*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('URL request: ' + req.url);
  if(req.url == '/text'){
    res.writeHead(200,{
      'ContentType' : 'text/plain; charset: utf-8'
    });
    var myRead = fs.createReadStream(__dirname + '/test/test.txt','utf8');
    myRead.pipe(res);
  }else if(req.url == '/html'){
    res.writeHead(200,{
      'ContentType' : 'text/html; charset: utf-8'
    });
    var myRead = fs.createReadStream(__dirname + '/test/index.html','utf8').pipe(res);;
  }else if(req.url == '/json'){
    res.writeHead(200,{
      'ContentType' : 'application/json; charset: utf-8'
    });
    var arJs = {
      'test1':'test11',
      'test2':'test22',
      'test3':'test33',
      'test4':'test44',
      'test5':'test55',
    }
    res.end(JSON.stringify(arJs));
  }else{
    res.writeHead(200,{
      'ContentType' : 'text/plain; charset: utf-8'
    });
    res.end('Hello World');
  }



});

server.listen(3000,'127.0.0.99');
console.log('Check 127.0.0.99:3000');

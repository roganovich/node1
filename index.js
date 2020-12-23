var express = require('express');
var app = express();
/**
* подключеаем пакет сервера
* запускаем и сразу передаем наш обработчик приложения
*/
var server = require('http').createServer(app);
/**
* создаем слушатель сервера и передаем в него службу сервера
*/
var io = require('socket.io')(server);

/**
* слушаем порт 3000
*/
server.listen(3000);
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/chat.html')
});
//пользователи чата
users = [];
//все активные соденинения
connections = [];

io.sockets.on('connection', function(socket){
  //добавляем соденинение в список
  connections.push(socket);
  console.log('Вход');

  socket.on('disconnect', (reason) => {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Выход');
  });

  //при отправке формы
  socket.on('submit form', function(data){
    //передаем данные в новую функцию для всех соденинений
    io.sockets.emit('add msg', data);
    console.log(data);
  })
});

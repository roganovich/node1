var express = require('express');
var bodyParser = require('body-parser')

//инизицлируем freamwork
var app = express();
//получаем post запросы
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//указываем шаблонизатор
app.set('view engine', 'ejs');

//работаем с маршрутизацией
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
})

app.post('/post', urlencodedParser,  function(req, res){
  if(!req.body) res.sendStatus(400);
  console.log(req.body);
  res.render('post', {data:req.body});
})

app.get('/news/:id', function(req, res){
  //res.send('Test id:' + req.params.id);
  res.render('news', {newsID: req.params.id});
  console.log(req.query);
})

app.listen(3000);

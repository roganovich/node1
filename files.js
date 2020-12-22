var fs = require('fs');

//асинхронное чтение файла
//var file_reader = fs.readFileSync('./storage/hello.txt','utf8');

//ожидаем прочтение файла
fs.readFile('./storage/hello.txt','utf8', function(error, data ){
  console.log(data);
});

console.log('test');


//запись текста в файл
//var new_message = "Add new Row \n" + file_reader;
//fs.writeFileSync('./storage/newFile.txt', new_message);

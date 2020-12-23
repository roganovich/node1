var fs = require('fs');

//асинхронное чтение файла
//var file_reader = fs.readFileSync('./storage/hello.txt','utf8');

//ожидаем прочтение файла
fs.readFile('./storage/hello.txt','utf8', function(error, data){
  console.log(data);
  writeFile(data);
});

console.log('test');




function writeFile(text) {
  //запись текста в файл
  var new_message = "Add new Row \n" + text;
  fs.mkdir('storage', function(error, data){
      fs.writeFileSync('./storage/newFile.txt', new_message);
  });
  fs.unlinkSync('./storage/newFile.txt');
  // удаление файла
//  fs.unlink('./storage/newFile.txt', function(error, data){
    console.log('unlink');
    fs.rmdirSync('storage');
  //});
}

var fs = require('fs');

//сичтываем файл частями
var myRead = fs.createReadStream(__dirname + '/test/test.txt','utf8');
var myWrite = fs.createWriteStream(__dirname + '/test/test2.txt');

fs.unlinkSync(__dirname + '/test/test2.txt');
//преедает из одного файла в другой
myRead.pipe(myWrite);
/*
myRead.on('data', function(chunk){
  console.log('New chunk');
  //записываем файл части файла
  myWrite.write(chunk)
});
*/

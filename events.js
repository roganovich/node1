var events = require('events');
var util = require('util');

var myEvent = new events.EventEmitter();

myEvent.on('my_event',function(text){
  console.log("Started: " + text);
})
myEvent.emit('my_event','testEvent');

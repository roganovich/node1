var events = require('events');
var util = require('util');

var myEvent = new events.EventEmitter();

myEvent.on('my_event',function(text){
  console.log("Started: " + text);
})
myEvent.emit('my_event','testEvent');

var Cars = function(model) {
  this.model = model;
}

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('Bmw');
var audi = new Cars('Audi');
var reno = new Cars('Reno');

var carsArray = [bmw, audi, reno];

carsArray.forEach(function(car){
  car.on('speed', function(text) {
    console.log(car.model + " speed " + text) ;
  })
});

bmw.emit('speed', '200');
audi.emit('speed', '100');
reno.emit('speed', '300');

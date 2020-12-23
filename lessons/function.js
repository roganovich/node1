function test(){
  console.log("function test");
}

function call(funcName){
  funcName()
}

var stringFunction = function(){
  console.log("function stringFunction");
}


test();
call(stringFunction)

// getName();
// console.log(x);
// var x = 1;
// function getName(){
//     console.log("Hello Aish");
// }

// call stack is a stack where our global execution context will be kept

function a(){
    console.log('b',b);
}
var b = 10;
a();
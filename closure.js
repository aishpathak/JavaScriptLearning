//a function along with its environement or lexical scope bundled together called closure


//function along with its lexical scope is bundled together called closure 
//OR
// function bundled with its lexical scope called closure

// a closure gives you access to another functions's scope from an inner function.
//it remember its lexical scope where it was defined



/////////////////////

function outer(){
    let counter = 0; 
    function inner(){
        counter++;
        console.log('counter value',counter);
    }
    return inner;
}
const fn = outer();
fn(); // output counter value 1
fn(); // output counter value 2 , it means it remembers counter value


//////////////////////////////
var b = 5;
function x(){
     b = 10;
    function y(){
        console.log(b);
    }
     b = 100; 
    return y();
}




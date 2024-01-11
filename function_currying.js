/*
Currying is a process in functional programming in which we transform a function with 
multiple arguments into a sequence of nesting functions that take one arguments at a time.

function f(a,b,c) is transformed to f(a)(b)(c);

Note: Currying doesn't call a function, it simply transformed it.
*/
function sum(a,b,c){
 return a+b+c;
}
console.log(sum(2,3,5));

//so now our task is to transform it to sum(2),(3),(5));

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }}

    const curriedSum = curry(sum);
    console.log(curriedSum(2)(3)(5));

    //
    

function addition(a,b,c){
    return a+b+c;
}
addition(2,3,5);
// your task is to transform this to addition(2)(3)(5);

function curryExample(fn){
    return function (a){
        return function (b){
            return function (c){
                return fn(a,b,c)
            }
            }
        }
    }

    const curry1 = curryExample(addition);
// remove duplicate
// function removeDuplicate(){
//     let a = [1,3,3];
// let newArray = [];
// for(let i=0;i<a.length;i++){
//     if(a.indexOf(a[i]) === i){
//         newArray.push(a[i]);
//     }
// }
// return newArray
// }
// removeDuplicate();


//
// getName();
// console.log(x);



// let x = 7;
// var getName = ()=> {
//     console.log("Namaste Javascript");
// }

// console.log(getName);

// 1st step memory allocation
// x:undefined
// getName: {
//     console.log("Namaste Javascript");
// }


// closure
// a function along with its lxical scope called closure 
// lexical scope: is the ability for a function to access its parents scope variable and parameter values that is called lexical scope.

// function z(){
//     var b=900;
//     function x(){
//         var a =7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// const GITHUB_API = "https://api.github.com/users/akshaymarch7"
// const user = fetch(GITHUB_API);
// user.then(function(data){
//     console.log(data);
// })

// Map,filter,reduce

const arr = [5,1,3,2,6];
// const output = arr.filter((data)=>{
//     return data%2;
// });
// function isOdd(x){
//  return x%2;
// }
// console.log(output);

const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
});
console.log('output',output);
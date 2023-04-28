// remove duplicate
function removeDuplicate(){
    let a = [1,3,3];
let newArray = [];
for(let i=0;i<a.length;i++){
    if(a.indexOf(a[i]) === i){
        newArray.push(a[i]);
    }
}
return newArray
}
removeDuplicate();
function abc(a){
    let uniqueArray = [];
    for(let i=0;i<a.length;i++){
        if(a.indexOf(a[i]) == i){
            uniqueArray.push(a[i]);
        }
    }
    return uniqueArray;
}

console.log(abc([1,2,4,1,2,6,3]));



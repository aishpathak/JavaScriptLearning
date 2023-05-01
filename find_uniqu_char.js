function findUnique(str){
    let obj = {};
    const arr = str.split('');
    for(let i=0;i<arr.length;i++){
        if(obj(arr[i]) && obj[arr[i]]>=1){
            return false;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    return true;
}

console.log(findUnique('abcdd'));
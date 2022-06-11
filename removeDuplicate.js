// N = 4
// a[] = {0,3,1,2}
// Output: -1
// Explanation: N=4 and all elements from 0
// to (N-1 = 3) are present in the given
// array. Therefore output is -1.

// Input:
// N = 5
// a[] = {2,3,1,2,3}
// Output: 2 3 
// Explanation: 2 and 3 occur more than once
// in the given array.

// a[] = {2,3,1,2,3}


// function removeDuplicate(a,n){
//     let duplicateElements = [];
// for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//     if(a[i] == a[j]){
//         duplicateElements.push(a[i]);
//     }
// }
// }
// if(duplicateElements.length != 0){
// return duplicateElements;
// }
// else{
//     return -1;
// }
// }

// removeDuplicate([2,3,1,2,3],5)

function toFindDuplicates(arryy) {
    // let arryy = arry.sort();
    let a = [];
    let toMap = {};
    for (let i = 0; i < arryy.length; i++) {

        if (toMap[arryy[i]] && !a.includes(arryy[i])) {
            a.push(arryy[i]);
        }

        toMap[arryy[i]] = true;
    }
    if(a.length>0){
    console.log(a);
    return a;
    }
    else{
        console.log(-1);
        return -1;
    }
    }
    let arry = [26,13,9,25,1,1,0,22,13,22,20,3,8,11,25,10,3,15,11,19,20,2,4,25,14,23,14];
    toFindDuplicates(arry);
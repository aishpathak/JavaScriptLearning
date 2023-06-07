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

function toFindDuplicates(arry) {
    let arry = arry.sort();
    let a = [];
    let toMap = {};
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]] && !a.includes(arry[i])) {
            a.push(arry[i]);
        }

        toMap[arry[i]] = true;
    }
    if(a.length>0){
    console.log(a);
    return a;
    }
    else{
        return -1;
    }
    }
    // let arry = [26,13,9,25,1,1,0,22,13,22,20,3,8,11,25,10,3,15,11,19,20,2,4,25,14,23,14];

    // second approach
    toFindDuplicates(arry);


    function toFindDuplicates(arryy) {
        // let arryy = arry.;
        // let a = [];
        let toMap = {};
        for (let i = 0; i < arryy.length; i++) {
    
            if (arryy[i] in toMap) {
                toMap[arryy[i]] += 1
            }
            else{
                toMap[arryy[i]] = 1
            }
        }
        for (var key in toMap) {
            if(toMap[key]>1){
                console.log(key);
            }
            // console.log(key, toMap[key]);
          }
        // console.log(toMap);
        }
        // let arry = [26,13,9,25,1,1,0,22,13,22,20,3,8,11,25,10,3,15,11,19,20,2,4,25,14,23,14];
        let arry = [5,3,5,1,2,7];
        toFindDuplicates(arry);
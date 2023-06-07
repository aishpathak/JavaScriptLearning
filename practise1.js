const ele = document.querySelector("input");
function output(){
    console.log('call from server');
}

function fnDebounce(fn,timeout){
    let timer;
    return function(){
        if(timer)
        timer = setTimeout(()=>{
            fn();
        },timeout)
    }
}

fnDebounce(output,1000);
ele.addEventListener("keyup",1000);
const ele = document.querySelector("input");
function outcome(){
    console.log('Data recieved from server');
}


function fnDebounce(fn,timeout){
    let timer;
    return function(){
        if (timer)
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn();
        },timeout)
    }
}

const result = fnDebounce(outcome,1000);
ele.addEventListener("keyup",result);
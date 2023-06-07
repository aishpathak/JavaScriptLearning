
function changeCharacter(s){
    let a = [];
  for(let i=0;i<s.length;i++){
    if(s[i]>='a' && s[i]<='z'){
        let code=0;
        code = s.charCodeAt(i)-32;
        a.push(String.fromCharCode(code));
    }
    else{
        code = s.charCodeAt(i)+32;
        a.push(String.fromCharCode(code));
    }
  } 
  a = a.join(""); 
  console.log(a);
  return a;
}

// s = 'aello' =>it should be between a=97 to 122
s="DEEP";
changeCharacter(s);

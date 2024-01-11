// call method: function borrowing , every function have access to call method we can pass any object to point to this 
//keyword

let name = {
    firstName: "Aish",
    lastName: "Pathak",
}
let printFullName = function(hometown,hometown1){
    console.log(this.firstName + this.lastName + "from "+hometown +""+hometown1);
}
let name2 = {
    firstName: "Aniket",
    lastName : "Tiwari"
}

let data = printFullName.bind(name2,"Gorakhpur","Lucknow");

console.log('dataaa',data);

data();


printFullName.call(obj1,)
let user1 = {
    firstName: "Aish",
    lastName: "Pathak"
}

let user2 = {
    firstName: "Aniket",
    lastName: "Tiwari"
}

printFullName = function(...a){
    console.log(this.firstName + " " + this.lastName +" "+ "from " + " "+a);
}

// printFullName.call(user2,"Gorakhpur","lucknow");
// printFullName.apply(user2,["Gorakhpur","lucknow"]);

var bound = printFullName.bind(user2,["Gorakhpur","lucknow"]);
console.log(bound);
bound();
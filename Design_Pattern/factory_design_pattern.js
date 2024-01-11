function Developer(name){
    this.name = name;
    this.type = "Developer"
}
function Tester(name){
    this.name = name;
    this.type = "Tester"
}

function display(){
    console.log(this.name, this.type);
}
// Now we can create Factory, our employee Factory.
function EmployeeFactory(){
    this.create = (name,type) =>{
        switch(type){
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Aish",1));
employees.push(employeeFactory.create("Deep",2));
employees.forEach(emp=>{
    display.call(emp);
})
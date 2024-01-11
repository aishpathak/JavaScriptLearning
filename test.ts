import { ReactiveFormsModule } from '@angular/forms';
let multiType:number | boolean;
multiType = 20;
multiType = true;

//interface will only have declarations of the members. 
interface IPerson {

    firstName:string;
    lastName:string;
    getFullName:()=>string;
}

function newFn(p:IPerson){

}

class Employee{
    employeeName: string;
    constructor(name:string){
        this.employeeName = name;
    }
}

const myForm = new FormGroup({
    name = new FormControl('');
})
/*
Dynamic Components are those components which we create dynamically at runtime.
Dynamic component is not a specific feature provided by Angular. Instead,it is just like a normal component ,which gets created at
on runtime. We create or render dynamic component by writing some code.

How to render Dynamic Component
1. Using*ngIf Directive

ex. 
    <app-delete *ngIf="show"></app-delete>

2. Using Dynamic Component Loader
    LoadComponent(data){
        //Write logic to load component
    }
    Using this approah,we can create and render a component by writing some code and then we can manually attach to the DOM.
*/
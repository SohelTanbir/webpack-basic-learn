// import css file to bundle
import css from "./style.css"

const learning = 'webpack';
console.log(learning);

const greeting = ()=>{
    console.log("ES6 code will be converted into ES5");
}
greeting();

class Hello {
    constructor(name){
        this.name = name;
    }

    sayName(){
       console.log(this.name); 
    }
}

const obj = new Hello("sohelrana");
obj.sayName();
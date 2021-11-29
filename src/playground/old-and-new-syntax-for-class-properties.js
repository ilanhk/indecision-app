
class OldSyntax{
    constructor(){
        this.name = 'Ilan'
    };
    getGreeting(){
        return `hi my name is ${this.name}`
    };
};
const oldSyntax = new OldSyntax();
const getGreeting= oldSyntax.getGreeting;
// console.log(getGreeting()); cant do this because not binded to instense

//-------------------------------------------
//new es6 class properties syntax

class NewSyntax{
    name= 'Jen';
    getGreeting = ()=>{
        return `hi my name is ${this.name}`
    }; // this function will always be bound to the class instence
};

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

//need to install babel-plugin-transform-class-properties by typeing yarn add babel-plugin-transform-class-properties
// need to add  this "plugins": ["transform-class-properties"] in .babalrc
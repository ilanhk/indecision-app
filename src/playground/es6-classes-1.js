// Classes - similar to Classes in python

class Person {
    constructor(name = 'Anonymous', age=0) {
        this.name = name;
        this.age = age ; 
    }
    getGreeting() {
        //return 'Hi I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`;    
    } // you can add functions in the class

    getDescripttion() {
        return `${this.name} is ${this.age} year(s) old!`
    }
}
//  set a default in the parameter


//Subclasses

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }// can set up methods for subclasses
    // !! - does have
    // ! - does not have

    getDescripttion() {
        let description = super.getDescripttion();
        
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    } // can overide stuff from parent class

} // extend keyword is a way to show that Student is a subclass of Person
//super refers to the parent class

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += ` I am from ${this.homeLocation}.`;
        }

        return greeting
    }
}


const me = new Traveler('Ilan Lieberman', 28, 'Hong Kong'); // new key word tells javascript you want to make a new instense
console.log(me.getGreeting());

const other = new Traveler()
console.log(other.getGreeting())


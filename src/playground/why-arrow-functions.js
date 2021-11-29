//Why Arrow functions?

const square = function(x) {
    return x*x
};

function squarewithname(x) {
    return x*x
};


// const squareArrow = (x) =>{
//     return x*x
// }; this is the long version

const squareArrow = (x) => x*x; // this is the shorter and more concise version
console.log(squareArrow(6))
//cant use this version when awaiting promises of if the function cant be in one line

// Arrow functions are anonymous while functions dont have to be.
// If you want to name an arrow function you need to assign it to a variable



//When to use Arrow function?

//good to use arrow funcions nested in another function beucase would be able to use variables from parent function. Especially 'this' in an object that has function and the arrow function is nested in it.


//When NOT to use Arrow function?

//when using arrow functions you wont have access to the arguments variable  but a regular function would ex:

// const add = (a,b) => {
//     console.log(arguments);
//     return a + b;
// }

//  function add(a,b) {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(1,4))


// Dont want to use Arrow functions in a method like the print_places_lived method dont need function in this function becuase its in an object
const user = {
    name: 'Ilan',
    cities: ['Hong Kong', 'Vancouver', 'Tel Aviv'],
    print_places_lived (){
        console.log(this.name);
        console.log(this.cities);


       const cityMessages = this.cities.map((city)=> this.name + ' Lived in '+ city + '!'); // map can change each item in an array and creates a new array
        console.log(cityMessages)
        // this.places_lived.forEach(function (city) {
        //     console.log(this.name + ' ' + city)
        // });
        
    }
};
console.log(user.print_places_lived())
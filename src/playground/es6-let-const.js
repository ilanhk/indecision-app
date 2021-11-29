

var namevar = 'larry';
namevar ='jen'; // with var you can reassign a variable
var  namevar ='Mike'; //Problem with var is that you can redefine a variable (like this ex) which can be problematic if you are using the same variable somewhere else which would lead to hard to debug issues.
console.log('namevar',namevar);



//Let

let namelet = 'Bob';
namelet = 'Chad' // with let you can reassign a variable 
console.log('namelet', namelet);
//you cant redefine a variable like var can

// Const
const nameconst = 'Fred';
console.log('nameconst', nameconst)


// When creating variables use const all the time 
// but good practice to use let if the variable would be reassigned and use const if you dont intend to. Never use var.
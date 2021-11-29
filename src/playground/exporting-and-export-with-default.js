console.log('utils.js is running!');

const square = (x)=>x*x; 

const add = (a, b)=> a+b;

// const add = (a, b)=> a+b; // instead of putting the variable in export you can put export in front of the variable statement.

const subtract = (a, b)=> a-b; 

// export default subtract ; another way to make an export default without putting in export 
// you can export default in front of a class to export the whole class:
// export default class Person {

// }

export{ square, add, subtract as default }; //not an object export syntax
// 2 types of export every single file can have a default export or named exports
// named exports we can have as many as we like
//default exports we can just have 1 export. sometinmes good to make a default export.
// need to write 'variable as default' in export to make it a default export
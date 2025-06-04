"use strict";
console.log("Hello, TypeScript!");
const country = 'USA';
console.log(country);
//type checking
let playerName = 'ronaldo'; //if we declare and also assign a value, TypeScript infers the type it means it assume it is a string
console.log(playerName);
playerName = 123; // This will cause a type error in TypeScript
console.log(playerName);
let playerName2 = 'john';
console.log(playerName2);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 'rony')); // This will cause a type error in TypeScript
function multiply2(a, b) {
    return a * b;
}
console.log(multiply2(4, 5)); // This will work fine
//array
let numbers = [1, 2, 3, 4, 5];
numbers.push('6'); // This will cause a type error in TypeScript because '6' is a string and in the array we have only numbers
let mixed = ['rony', 4, true];
console.log(mixed);
mixed.push(false); //it will work because array is mixed type
// mixed.push({
//     name:'hello'
// }) //it will not work because we have not defined the type of object in the array
//object
let person = {
    name: 'rony',
    age: 25,
    isActive: true
};
person.name = 34; // This will cause a type error in TypeScript because name is expected to be a string
//explicitly defining types
//these call explicit types
let a;
let b;
let c;
a = 'hello world';
b = 123;
c = true;
//array with explicit types
let numbersArray = [];
let mixedArray = []; //mixed type array

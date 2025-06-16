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
//function with explicit types
const add = (a, b, c) => {
    return a + b;
};
console.log(add(4, 'rony')); // This will cause a type error in TypeScript
console.log(add(4, 5)); // This will work fine
//type aliases
const userDetails = (id, user) => {
    console.log(`user id is ${id} and user details are ${user.name} and ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.age > 50 ? 'sir' : 'mr.'} ${user.name}`);
};
//function signature
let calculation; // this means calculation is a function that takes two numbers and returns a number
calculation = (a, b) => {
    return a + b;
};
//classes
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
const masrafi = new Player('Masrafi', '40', 'Bangladesh'); //if we send a string to age it will cause a type error in TypeScript because age is expected to be a number
const players = [];
players.push(masrafi); //we can push masrafi to players array because players is an array of Player type

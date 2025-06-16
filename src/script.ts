console.log("Hello, TypeScript!");

const country='USA';
console.log(country)

//type checking
let playerName='ronaldo'; //if we declare and also assign a value, TypeScript infers the type it means it assume it is a string

console.log(playerName);
playerName=123; // This will cause a type error in TypeScript
console.log(playerName);

let playerName2: string='john';
console.log(playerName2);


function multiply(a,b){
    return a*b
}
console.log(multiply(4,'rony')); // This will cause a type error in TypeScript

function multiply2(a:number,b:number){
    return a*b
}
console.log(multiply2(4,5)); // This will work fine

//array
let numbers=[1,2,3,4,5];
numbers.push('6') // This will cause a type error in TypeScript because '6' is a string and in the array we have only numbers

let mixed=['rony',4,true]
console.log(mixed);
mixed.push(false) //it will work because array is mixed type

// mixed.push({
//     name:'hello'
// }) //it will not work because we have not defined the type of object in the array


//object
let person={
    name:'rony',
    age:25,
    isActive:true
}

person.name=34 // This will cause a type error in TypeScript because name is expected to be a string


//explicitly defining types
//these call explicit types
let a: string;
let b: number;
let c:boolean;

a='hello world'
b=123;
c=true;

//array with explicit types
let numbersArray: number[]=[];
let mixedArray: (string | number | boolean)[] = []; //mixed type array

//function with explicit types
const add=(a:number,b:number,c?:string)=>{ // c is an optional parameter
    return a+b
}

console.log(add(4,'rony')); // This will cause a type error in TypeScript
console.log(add(4,5)); // This will work fine

//type aliases
const userDetails=( id:stringOrNumber,user:userType)=>{
    console.log(`user id is ${id} and user details are ${user.name} and ${user.age}`)
}

const sayHello=(user:{name:string,age:number})=>{
    console.log(`hello ${user.age > 50 ? 'sir' : 'mr.'} ${user.name}`)
}
    
   //so now as we can see we have to write the same type again and again so we can use type aliases

   type stringOrNumber=string | number; //we use it above parameter id
   type userType= {name: string;
    age:number} //we use it above parameter user we can say it is shortcut for the type of user object


    //function signature
let calculation:(a:number,b:number)=>number; // this means calculation is a function that takes two numbers and returns a number

calculation=(a:number,b:number)=>{
    return a+b;
}


//classes

class Player{
    name:string;
    age:number;
    country:string;


    constructor(n:string,a:number,c:string){
        this.name=n;
        this.age=a;
        this.country=c;
    }

    play(){
        console.log(`${this.name} is playing`);
    }
}

const masrafi=new Player('Masrafi','40','Bangladesh'); //if we send a string to age it will cause a type error in TypeScript because age is expected to be a number

const players: Player[] = [];

players.push(masrafi); //we can push masrafi to players array because players is an array of Player type


//we have to learn more about classes and inheritance in TypeScript
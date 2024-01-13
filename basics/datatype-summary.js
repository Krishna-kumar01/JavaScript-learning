//Primitive

// 7 types : String , Number ,Boolean , Null , undefined, Symbols,
// Bigint
/*
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 156464564654561234n
// Reference (Non primitive)

// Array , Object, Functions

const heros = ["shaktiman ", "naagraj", "doga"];
let myObj = {
    name: "Krishna",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack Memory (Primitive) copy of data
//Heap (non-Primitive) Reference  original of data

let myYoutubename = "learnwithkrishu"

let anothername = "myYoutubename"
anothername = "krishucoder"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.come",
    upi: "user@ybl"
}

userTwo = userOne
userTwo.email="krishu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
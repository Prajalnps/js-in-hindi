// in other languages there's a concept for two types of datatypes

// call by value and call by reference
//categorized in a way to find out how the data is stored and how we can access in memory(primitive and non-primitive)


// 7 primitive types : string, number, null, undefined, bigint, symbol, boolean
// 1 non primitive types : reference, objects, Array, functions

// example of symbol: making any value unique, using components in multiple places, requirement to make component unique, wrapping into symbol

/*
    reference type: non primitive
    - values that can be referenced in memory
    - values jo ki memory mein inka reference directly allocate kiya ja sakta hai
*/

// If you want to master JS, master browser events and objects

/* 
    Is JS dynamically typed language or statically typed language?
    - Dynamically, depends on what value you assign to the variable


    Typescript is static

    example: const score:number = 100;
*/

const score = 100 //number
const scoreValue = 100.3 //float

const isLoggedIn = false //boolean
const outsideTemp = null //null, empty
let userEmail; //undefined

//symbol, usage
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)//output 


// Big int example
const bigNumber = 3129832368162381623816n  //adding n at the end to declare it a bigInt

//Reference non primitive type,
//Array, Objects, functions 
const heros = ["Superman", "Spiderman"];


// object can store string, number, boolean, array, objects, etc

let myObj = {
    name: "Prajal",
    mobile: 9898494848
}


// Function

// variable type function 
const myFunction = function () {
    console.log("Hello World");
}

//how to find the datatype of a value or anything
console.log(typeof bigNumber)

//note: the datatype of non primitive data types are usually referred as function and the function is referred to object function
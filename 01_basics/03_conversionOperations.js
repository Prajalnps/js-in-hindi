let score = "33"

console.log(typeof score)
console.log(typeof (score)) //you can also use the type of as method

//if we want to do the operation in 100% number

let valueInNumber = Number(score) //guarantee converted to number, class based approach

console.log(typeof (valueInNumber));

/*
    Conversions

    "33" => 33

    "33abc" => NaN

    true => 1

    false => 0

    null => 0

    undefined => NaN
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

/*
    Conversion

    1 => true
    0 => false
    "" => false
    "Prajal" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)


/***************************OPERATIONS*****************************/

// important operations
let value = 33

let negValue = -value

console.log(negValue)
console.log(typeof negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 ** 2) //2 to the power 2
// console.log(2 % 2) // reminder is useful for cryptography, in algorithms

let str1 = "hello"
let str2 = " Prajal"

let str3 = str1 + str2
console.log(str3); //hello Prajal


// Tricky conversion

console.log(true) //output true
console.log(+true) //output 1
console.log(+"") //output 0

// conversion
// https://tc39.es/ecma262/#sec-type-conversion
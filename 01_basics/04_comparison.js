// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 === 1);
// console.log(2 != 1);
// console.log(2 !== 1);

// but problem arrise in the following codes
console.log("2" > 1); //true, js auto type conversion of "2" to 2
console.log("02" > 1); //true, js auto type conversion of "02" to 2
//make sure to have same data type

//there is no predictible result
console.log(null > 0); //false 0>0
console.log(null == 0); //false null == 0
console.log(null >= 0); //true 0>=0

//comparison changes null to a number 0 

//for undefined it is always false


// strict check "===", checks values and datatype
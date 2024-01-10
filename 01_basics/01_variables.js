const accountId = 1343
var accountEmail = "Prajal@gmail.com"
let accountPassword = "TestPassword123"
accountCity = "Pokhara" //JS is a safe language, without using keyword, but this is not preferred
let accountState; //output undefined

// accountId = 2
accountEmail = "Prajal2@gmail.com"
accountPassword = "testPassword1234"
accountCity = "Kathmandu"

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity
])

/*
    history:
    - there used to be a problem with JS, it didn't know what scope was

    - this is a scope a curly braces    
    {

    }

    const: block scope
    let: block scope
    var: global scope

    var keyword is history, always use let and const

    prefer not to use var
    because of issue in block scope and functional scope
*/
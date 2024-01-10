const accountId = 144553
let accountEmail = "krishnakumar@gmail.com"
var accountPassword = "12345"
accountCity = "Siwan"
let accountState;

/*
prefer not to use var 
becouse of issue in block scope and function scope
*/

//accountId = 2   //not allowed becouse const keyword

accountEmail = "kumar@gmil.com"
accountPassword = "6789"
accountCity = "Rajkot"

/*
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log("accountCity");
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
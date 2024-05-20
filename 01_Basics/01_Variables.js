const accountId = 1232323
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"//never use var in js as there is problem of scope
accountCity = "jaipur"
let accountState;//if variable is declared and left, its vale by default is undefined

// accountId= 2//not allowed
accountEmail="hc@hc.com"
accountPassword="2223332223"
accountCity="varanasi"

/*pprefer not to use var because of
issue in block scope and fuunctional scope
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);
console.table([accountEmail,accountId,accountPassword,accountCity])
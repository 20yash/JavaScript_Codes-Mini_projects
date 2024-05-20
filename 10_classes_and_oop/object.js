function multipleByFive(num){
    return num*5
}
multipleByFive.power=2

console.log(multipleByFive(5))
console.log(multipleByFive.power)//output is 2
console.log(multipleByFive.prototype)//output is {}
//defualt context are set, therefore empty parenthesis is method of this
//function is a function and function is an object as well
// (in simple words, other properties of protoype and also the context of this is available here)


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){ //injecting methods(refer we have various methods on the browser in prototype)
    this.score++//whoever called, increase the score; might be chai or tea

}

createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
}

//new keyword here informs chai that new properties have arrived here 

const chai = new createUser("chai",25)
const tea = new createUser("tea",200)

tea.printMe()
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
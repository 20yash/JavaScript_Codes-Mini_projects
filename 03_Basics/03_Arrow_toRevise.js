const user={
    username : "shivanshu",//username is current context here(in the scope, we use this keyword)
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);//whenever we are referring the current context, we use THIS keyword
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "sam"//changing the value here, therefore output is also changed
// user.welcomeMessage()

// console.log(this);

//global object inside the browser is window object

// function chai(){
//     let username = "shivanshu"
//     console.log(this.username);//this cannot be used inside the function, we can only use it in objects
// }
// chai()

// const chai = function(){
//     let username = "shivanshu"
//     console.log(this.username);// here also, this is not used
// }

//ARROW FUNCTION
//Remove function keyword, add = and > after paranthesis, it becomes arrow function

const chai = ()=>{
    let username = "shivanshu"
    console.log(this);
}
chai()

const add = (num1, num2) => {//this is explicitly return; using RETURN keyword mandatorly
    return num1 + num2

}
console.log(addTwo(3,4))

const addTwo = (num1, num2) => num1 + num2 //this is implicit return  without using return keyword
//one other way to use arrow keyword
//whenever we use curly brace we HAVE TO USE RETURN keyword and when we use only paranthesis, no RETURN KEYWORD is required
const addThree = (num1, num2) => (num1 + num2)

const addfour = (num1, num2) => ({username : "shivanshu"})
console.log(addfour(3,4))


const myArray = [2,5,3,7,8]

myArray.forEach(()=>{})
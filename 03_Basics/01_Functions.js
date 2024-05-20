

function sayMyName(){//defination of function
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

sayMyName()//reference of function
// sayMyName//reference of function

// function addTwoNumbers(number1, number2)//whenever we create defination of function, input is called parameters(num1,num2)
// {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5)//giving argument to the function
// //whenever we call the function, values passed in it is called arguments

function addTwoNumbers(number1, number2)
{
    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,5)

console.log("Result is",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shivanshu"));

//simply returning the value dosen't mean it will print the values; we have to console log to print it.

// *******************video #20***********************

function calculateCartPrice(val1,val2,...num1){
    return val1,val2,num1

}
// rest and spread opeartor(...) both have same syntax

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "shivanshu",
    price : 199
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})
//we can call the function by directly calling the object

const myNewArrays = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArrays));
console.log(returnSecondValue([200,400,500,1000]));
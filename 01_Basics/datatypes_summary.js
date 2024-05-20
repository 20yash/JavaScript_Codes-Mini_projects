//data types are mainly divided into two types; primitive and non primitive data types

//storing and accessing the data from memory is the base for categorising the data types

//***************************** */
/*primitive data types(this is call by value; whenever we copy this anywhere reference of original data is not given, 
    it is copied and then provided; changes are made in the copy itself)*/

//7 types-string, number,boolean, null,undefined,big int,symbol(to make values unique,we use symbol),



const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id  = Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber = 43535434545645345453535787878787n
console.log(typeof bigNumber);


//************************************** */
/*reference type or non-primitive data types(reference is directly allocated in the memory)*/

// Arrays, objects and functions are 3 non primitive data types
//return type of non primitive is object always/function-objects

// javascript is static typed language

//Typesccript is dynamically typed language

const heros = ["spiderman","superman","joker"]

//objects are in braces in key value pairs


let myObj={
    name:"shivanshu",
    age: 23,
}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof myFunction);

console.log(typeof myObj);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);

//+++++++++video#10, ++++++++++++++++

//memory is of two types, one is stack memory and other is heap memory
//Stack is used at primitive data types(we get a copy of the variable we declare)
//heap is used at non primitive data types(we get reference of the original value in heap)

let myYoutubeName ="hiteshchaudharydotcom"

let anotherName= myYoutubeName

anotherName="chai aur code"
console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl",
}


let userTwo=userOne


userTwo.email="abc@hotmail.com"
console.log(userOne.email);
console.log(userTwo.email);
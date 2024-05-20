//There are two ways to declare objects; one is by literal and other by constructor
//whenever we create objects by constructor, singleton is the object created
//whenever we create object by literals; singleton is not created

//**********objects literals(creating the object)*******************

Object.create //constructor method, singleton is created this way

const mySym = Symbol("key1")


const JSuser = {//key and values are defined separately and access is made easy
    name:"shivanshu",
    "fullName":"shivanshu Pathak",//we cannot access this value using dot.
    age:23,
    [mySym]:"mykey1",
    location:"noida",
    email:"shivanshu@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}

console.log(JSuser.email);//accessing the objects, one way is using dot as mentioned here
console.log(JSuser["email"]);//other way to access the objects is sq. brackets with double quotes on key
//key is also treated as string therefore double quotes

console.log(JSuser.fullName);
console.log(typeof JSuser[mySym]);


JSuser.email = "yash@gmail.com"

console.log(JSuser.email);
// Object.freeze(JSuser)

JSuser.email = "yash@microsoft.com"

console.log(JSuser);

JSuser.greeting = function(){
    console.log("hello JS User");
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
//to provide same object of reference, we use this
// console.log(JSuser.greeting);//function is not executed but reference is provided([Function(anonymous)])
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
// function to objects to null
//array to objects to null
//string to objects to null

//property vs method?

// let myName = "shivanshu     "
// let myChannel = "chai       "

// // console.log(myName.trim().length);

// console.log(myName.truelength);//by default property truelength which skips extra spaces and provides exact length


//using prototype to link


let myHeros = ["thor","spiderman"]

let heroPowers = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){//getSpiderPower is a method here
        console.log(`spidey power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){//property of hitesh is added and checked from top hierarchy
    console.log(`hitesh is present in all objects `);
}


Object.prototype.myHeros=function(){
    console.log(`array is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}

// heroPowers.hitesh()

myHeros.hitesh()//hitesh is passed directly to the top hierarchy, i.e. in the array then to object and then to null

myHeros.heyHitesh()

// heroPowers.heyHitesh() this is not having access here at heroPowers



//*****************INHERITANCE*********************/
//old approach
const User={
    username:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__:TeachingSupport//taking the access inside object
}

//this is Inheritance here, accessing the property  of other objects


Teacher.__proto__ = User//taking the access outside the object, other way of doing it


//Modern syntax or latest approach for ingeritance(accessing the property of other objects)


Object.setPrototypeOf(TeachingSupport,Teacher)
//SetProtoTypeOf does the same as __proto__
//TachingSupport to teacher, all properties of Teacher is accessed in TeachingSupport

let anotherUserName = "chaiaurcode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);//this provides chaiaurcode name for first execution as current context is chaiaurcode;CURRENT CONTEXT for every execution
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength()

//now checking for the property directly
"hitesh".trueLength()
"iceTea".trueLength()
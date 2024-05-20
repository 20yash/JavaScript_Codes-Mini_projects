const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);

//writable,enumerable and configurable is all false; hardcoded value of PI and cannot be overwritten


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai ={
    name: 'ginger tea',
    price : 200,
    isAvailable : true,
    orderChai : function(){
        console.log("not possible");

    }
}
//checking for descriptor properties, setting it and checking wherther they are available or not

console.log( Object.getOwnPropertyDescriptor(chai,"name"));

//defining property now, using defineProperty


Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:false

})

console.log( Object.getOwnPropertyDescriptor(chai,"name")); //using forof loop


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}
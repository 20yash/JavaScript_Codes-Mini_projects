//FOR OF loop

// for (const iterator of object) {
    //iterator is the variable here and in place of object, it can be arrays, strings, objects
    
// } //ending of loop, size of value and everything is known here
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//Maps
//MAP is an object, holding key-value pair
//No duplicate values in MAP
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")


console.log(map);

for (const [key,value] of map) {
    console.log(key,":-" , value);
    
}

//Maps are iterable but objects are not

const myObject = {
    Game1:"nfs",
    Game2:"spiderman"
}

for (const [key,values] of myObject) {
    console.log(key,values);
    
}
const name = "shivanshu" 
const repoCount =50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//we are using back ticks here(below escape key), this process is string interpolation

const gameName=new String('Shivanshu-pathak')// we are using objects here, by mentioning new keyword

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('u'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-16,3)
console.log(anotherString);

const newStringOne = "  shivanshu  "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','_'));

console.log(url.includes('yes'))

console.log(gameName.split('-'));
const score = 400

const balance = new Number(100)

console.log(balance);

console.log(score);

console.log( balance.toString());

console.log( balance.toFixed(2));//brings the precision value,in short;brings in decimal value

const otherNumber = 123.8937

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//********************MATHS*************************/

console.log(Math);

console.log(Math.abs(-4))

console.log(Math.round(4.7));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4,5,2,3,4,5,67,8,9));

console.log(Math.max(4,5,2,3,4,5,67,8,9));

console.log(Math.round(Math.random()*10) +1);//random value between 0 and 1

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1)))+min);
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);  Basic comparision operations


console.log("2">1);
console.log("02">1);

//typescript provides strict rules to perform certion actions

console.log(null>0);
console.log(null==0);
console.log(null>=0);
//equality and comparisions works differently, comparisions convert null to a number treating it as 0
//null>=0 is true and null> 0  is false


console.log(undefined > 0);
console.log(undefined==0);
console.log(undefined>=0);

//strict check is ===, this checks the value and also checks for the data type

console.log("2"===2);
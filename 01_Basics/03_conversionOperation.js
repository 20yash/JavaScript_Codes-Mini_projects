let score = "shivanshu"

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);


//"33" can be converted into number 33
//"33abc" cannot be converted into number and output is NaN (NOT A NUMBER)
//true is converted into 1 and flase into 0


let isLoggedIn = "shivanshu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// if we write 1 , boolean value is true and false for 0
//if we mention empty string in boolean, we get value as false
//if we mention value in string, value returned is true

let someNumber= 33
 let stringNumber = String(someNumber)
 console.log(typeof stringNumber);

 //*******************************operations*************************

 let value = 3
 let negValue= -value
 console.log(negValue);

//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2/2);
//  console.log(2**3);
//  console.log(2%3);   basic arithmatic operations

let str1= "hello"
let str2 = " world"

let str3 = str1+str2

console.log(str3);

console.log("1" +2);

console.log(1 + "2");
console.log("1" +2 + 3);
console.log(1 +2+"3");

console.log(+true);
console.log(+"");

// let num1,num2,num3
// num1=num2=num3=2+2

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);
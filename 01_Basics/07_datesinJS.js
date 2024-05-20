//Dates

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);//typeof of Date is object

// let myCreatedDate = new Date(2024, 0, 30)
// let myCreatedDate = new Date(2024, 0, 30, 2,3)
// let myCreatedDate = new Date("2024-01-30")
 let myCreatedDate = new Date("01-30-2024")


console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

// newDate.toLocaleString('default',{
//     weekday: "long",

// })
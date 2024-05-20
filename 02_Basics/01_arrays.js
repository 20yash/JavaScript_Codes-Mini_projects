const myArr = [0,1,2,3,4,5]//first way to create array

const myHeros = ["spiderman" , "joker", "batman"]

const myArr2 = new Array (1,2,3,4)//second way to create array, no need to add sq. brackets

console.log(myArr[1]);


//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(7)

// myArr.unshift(9)//adds the elements at the first place of the array

// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()//join binds the array and changes the data type to string

console.log(myArr);
console.log(typeof newArr);


//slice and splice

console.log("A ",myArr);

const myNewArray1 = myArr.slice(1,3)

console.log(myNewArray1);

console.log("B ",myArr);

const myNewArray2 =myArr.splice(1,3)
console.log((myNewArray2));

console.log("C ",myArr);
console.log("D ",myNewArray1);  
console.log("E ",myNewArray2);  
console.log("A ",myArr);

//Slice returns a piece of the array but dosen't affect the original array
//splice changes the original array by removing,replacing  or adding values and return the affected value

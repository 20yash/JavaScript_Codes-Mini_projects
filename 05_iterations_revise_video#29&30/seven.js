const myNumbers = [1,2,3,4,5,6,7,8,9,10]


const newNums = myNumbers.map( (num)=>{
   return  num+10

})


//chaining
//using multiple map and filter in a single line

const newNums1 = myNumbers
            .map((num)=> num * 10)//in chaining, result of this will be passed to other chain
            .map((num)=> num +1) //1 is added after 10 multiplication from previous step
            .filter((num)=> num >=40)

console.log(newNums1);



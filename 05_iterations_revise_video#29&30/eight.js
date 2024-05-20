//reduce function

const myNums = [1,2,3]


const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)//0 here is value of accumulator(acc)

console.log(myTotal);

//now in arrow function

const myTotal1 = myNums.reduce( (acc,currval)=>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+ currval;},8)

console.log(myTotal1);


const shoppingCart = [
    {
        itemName:"JS Course",
        price: 2999
    },
    {
        itemName:"python",
        price: 999
    },
    {
        itemName:"mobile dev",
        price: 5999
    },
    {
        itemName:"data scientist",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item)=>{
    console.log(`acc: ${acc} and currval: ${item}`);
    return acc + item.price

},0)

console.log(priceToPay);
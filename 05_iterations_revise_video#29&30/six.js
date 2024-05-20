const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (items)=>{
    // console.log(items);
    // console.log(coding);
    return items
})

// console.log(values);//output is undefined
//for each does not return any values


//checking directly using filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>4)//callback is also used here in filter

console.log(newNums);


const newNums1 = myNums.filter( (num) => {
    return num>4//explicit return, using return keyword to print values in array greater than 4
})

console.log(newNums1);


//checking using IF Condition
const Nums = []
myNums.filter( (num)=>{
    if (num>4) {
        Nums.push(num)
        
    }
})

console.log(Nums);


const books = [
    {title:'book one',genre: 'fiction',publish:1981,edition:2004},
    {title:'book two',genre: 'Non-fiction',publish:1992,edition:2008},
    {title:'book three',genre: 'History',publish:1999,edition:2007},
    {title:'book four',genre: 'Non-fiction',publish:1989,edition:2010},
    {title:'book five',genre: 'Science',publish:2009,edition:2014},
    {title:'book six',genre: 'fiction',publish:1987,edition:2010},
    {title:'book seven',genre: 'History',publish:1986,edition:1996},
    {title:'book eight',genre: 'Science',publish:2011,edition:2016},
    {title:'book nine',genre: 'Non-fiction',publish:1981,edition:1989},
]

let userBooks = books.filter( (bk)=>{
    return bk.genre === 'History'
})

 userBooks = books.filter( (bk) =>{
    return bk.publish>1995 && bk.genre ==='History' && bk.edition ===2007
})

console.log(userBooks);

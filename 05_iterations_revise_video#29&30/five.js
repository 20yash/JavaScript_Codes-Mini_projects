//for each


const coding = ["js","ruby","java","python","cpp"]


//call back function 
//call back function is nothing but a function with no name on it and parameter is passed in it(call it val,item or any other thing as it is inside thge array)

coding.forEach(  function  (item) {
    console.log(item);

})

//arrow function

coding.forEach(  (item)=>{
    console.log(item);
})


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item,index,arr)=> { 
    console.log(item,index,arr);
})


//iteration operation in array having objects in it
//IMPORTANT, iterating inside the array having objects in it

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },

    {
        languageName: "java",
        languageFile: "java"
    },

    {
        languageName: "python",
        languageFile: "python"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.languageFile);

})
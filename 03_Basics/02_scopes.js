

{}//this is scope


let a = 300// this is global scope


if (true) {
    let a = 10
    const b = 20
    // var c =30
    console.log("inner a:",a);
    
}//this IF statement is block scope


console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shivanshu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);// gives error as scope of website is exhausted in second function
    two()
}

// one()

if (true) {
    const username = "shivanshu"
    if(username === "shivanshu")
    {
        const website = " youtube"
        console.log(username + website);
    
    }
    // console.log(website);// error here as website scope is exhausted in the second IF 
    
}
// console.log(username);//error here also as scope of username is exhausted

//**************************** INTRESTING *********************/

addOne(5)
function addOne(num){
    return num + 1

}


addTwo(5)

const addTwo = function(num){//this is also a function but at times, this is referred to as EXPRESSIONS
    return num + 2
}
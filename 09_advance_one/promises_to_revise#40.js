//the promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value

const promiseOne = new Promise(function(resolve,reject){
    //do and async task
    //DB calls, Cryptography, network call
   setTimeout(function(){
    console.log("async task is complete");
    resolve()
},1000)
})

//.then() is directly connected with resolve

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@chai.com"})//passing values in resolve as it is passed in parameter
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"shivanshu",password:"123"})           
        }
        else{
            reject('ERROR: Something went wrong')//reject throws error
        }
    },1000)
})

const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{//chaining here
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected ");
 })

 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:"JS",password:"JS123"})           
        }
        else{
            reject('ERROR: JS went wrong')//reject throws error
        }
    },1000)
 });

 //using async-await in place of .then and .catch


// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive()


//different way using try-catch and async-await  


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()



//small expermiment here(FETCH)

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);

//     const data =await  response.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log("E:", error);
    
//    }
// }
// getAllUsers()


//doing the same in .then and .catch

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>console.log(data))
.catch((error)=>console.log(error))


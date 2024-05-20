//object literal; literally making an object here

const user={
    username:"shivanshu",
    logInCount:8,
    sigedIn:true,

    getUserDetails:function(){
        console.log("got user details from DB");
        console.log(`username: ${this.username}`);
        console.log(this);
        //getting current context i.e. this week's monday in user object by using "this" keyword
    }
        //this keyword is used to mark the current context


}
console.log(user.username);
console.log(user.getUserDetails());


//constructor function

// providing a new empty copy(called as instance) ; not dealing with global context

//new keyword is used to create new context do not get it confused bt this; this provides current context

//new keyword is a constructor function
//one object literal to multiple instances
// example const promiseOne = new Promise() 
//         const date = new Date()
//new instance is only required ,no older values


function User(username,logInCount,IsLoggedIn){
    this.username=username
    //this is an empty object in global scope, therefore directly username is assigned in username variable using this keyword
    this.logInCount=logInCount
    this.IsLoggedIn=IsLoggedIn
    this.greetings=function(){
        console.log(`welcome ${this.username}`);
    }

    return this// returning this, therefore entire global context is returned here
    //return this is not mandatory as it is executed as a default case

}

// const userOne = User("shivanshu",1,true)

// const userTwo = User("Yash",2,false)//overwritten on userOne

// console.log(userOne);



//To avoide this overwriting, we use new keyword


const userOne = new User("shivanshu",1,true)//much cleaner code here

const userTwo = new User("Yash",2,false)

console.log(userOne);
console.log(userTwo);

//abstraction and encapsulation can be seen here

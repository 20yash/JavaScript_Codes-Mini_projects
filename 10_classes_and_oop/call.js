function SetUserName(username){
    //complex DB calls here
    this.username = username
    console.log("SetUserName is called here");

}

function createUser(username, email, password){
    this.email=email
    this.password=password
    // SetUserName(username)//setUserName is not called here
    SetUserName.call(this, username)//now it is called here, holding the reference here with .call
    //providing this, optionally this is passed as parameter; setUserName will not use ots own this keyword rather it will use createUser's this keyword

}

const chai = new createUser("chai","chao@fb.com","123")

console.log(chai);
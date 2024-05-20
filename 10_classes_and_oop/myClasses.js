class User{
    //constructor is called whenever an object is initialised in a class
    //whenever we use new keyword, constructor is called
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){//method here to encrypt password
        return `${this.password}abc`
    }

    changeUpperCase(){//method for upper case
       return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUpperCase());

//behind the scene

function User1(username,email,password){
        this.username=username
        this.email=email
        this.password=password
}

//injecting more properties here

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User1("tea","tea@gmail.com","12345")

User1.prototype.changeUpperCase = function (){
    return `${this.username.toUpperCase()}`
}

console.log(tea.encryptPassword());
console.log(tea.changeUpperCase());

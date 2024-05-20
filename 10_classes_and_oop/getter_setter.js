
//for getters we use get and for setters we use set

//use return in get but never use return in set

//getters and setters are available bydefault in all classes
//getters and setters can be applied on variables/properties directly

class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
//getters and setters are made as method for the properties used

//if we define getter for a property, we have to define setters as well

get email(){
    return this._email.toUpperCase()//using underscore to set it private
}

set email(value){
    this._email = value
}


get password(){
    return `${this._password}hitesh`
}
set password(value){
     this._password = value
}

//constructor is also setting the value and setter is also setting the value; there is now a small race between both
//therefore giving the error maximum call stack size exceeded

}


//if we have to get a value outside class, we use getter
//if we have to set a value outside the class, we use setter

const hitesh = new user("hitesh@hitesh.ai","abc")

console.log(hitesh.password);
console.log(hitesh.email);

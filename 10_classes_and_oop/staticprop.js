class User {
    constructor(username){
        this.username=username
    }
    logMe(){//method here
        console.log(`username is ${this.username}`);
    }
    //sometimes, we do not want to provide the method(createId) access to every other object(hitesh) instatitated by this class(user) ; 
    //therefore we can use static keyword to avoid this
    static createId(){
        return `123`
        //reason for this method is to provide unique id
        // we do not want to provide unique id to everyone
    }

}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())


class Teacher extends User {
    constructor(username,email){
        super (username)
        this.email = email
    }
}

const iPhone = new Teacher("shivanshu","shivanshu@chai.com")

console.log(iPhone.logMe());

console.log(iPhone.createId());//cannot be accessed as it(createId) is declared static
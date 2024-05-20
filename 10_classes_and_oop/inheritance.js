class User {
    constructor (username){
        this.username=username
    }
    logMe(){//method in a class
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        //using super keyword here as it automatically takes us to the User class and fetches data of username from there
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
    addEmail(){
        console.log(`A new Email was added by ${this.email}`);
    }
    addPassword(){
        console.log(`A new Password was added by ${this.password}`);
    }

}
const chai =new Teacher("chai","chai@teacher.com","12345teacher")

chai.addCourse()
chai.addEmail()
chai.addPassword()

const MasalaChai = new User("tea","tea@tea.com","123tea")//remember, we are using User here

// MasalaChai.addCourse()  //not having acccess of addcourse
//only having access for logMe

MasalaChai.logMe()

console.log(chai === MasalaChai);//false
console.log(chai === Teacher);//false
console.log(chai instanceof Teacher);//true
//teacher is instance of chai

console.log(chai instanceof User);//true
//User is instance of chai(hierarchy is made, instance OF instance)
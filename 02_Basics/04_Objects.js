//******************objects by constructor(singleton)*************

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id  = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firstName:"Shivanshu",
            lastName:"Pathak"
        }
    }
}//nesting of objects is shown here

console.log(regularUser.fullname.userFullName.lastName);
console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 ={obj1,obj2}
// obj3=Object.assign(obj1,obj2)
obj3=Object.assign({},obj1,obj2,obj4)
//using assign here,{} braces becomes the target and all other objects are placed in it


const obj6 = {...obj1,...obj2,...obj3}//using spread operator as we used in arrays to merge the arrays
console.log(obj6);
console.log(obj3);


const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@microsof.com"
    },
    {
        id:1,
        email:"h@hotmail.com"
    },

]

console.log(users[2].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
//datatype of keys fetched from object tinderUser is now array,we can perform various operations here on it eg. add loop
//similarly, we can fetch values also from the object tinderUser
console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));//key-value is converted into arrays 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//If you want a specific value after looping through the object, we can use 'hasOwnProperty'


//**********************video#18**********************/
//destructuring of object

const course ={
    courseName : "JS in Hindi",
    price : 999,
    courseInstructor : "shivanshu"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);//using courseinstructor to get the value
console.log(instructor);//using instructor to get the value, output will be the same
//this is destructuring of object

//way of writing the values from backend is API,Previously values were returned in XML structure
//now the values are returned in JSON 


// //structure of JSON, similar to object but key is string and object is also string with no object name
// {
//     "name":"shivanshu",
//     "courseName":"JS in Hindi",
//     "price":"free"
// }

// //sometimes, API(JSON) is received not  only in object but in arrays also(nested objects within array)

// [
//     {},
//     {},
//     {}
// ]

// https://randomuser.me/  
// https://jsonformatter.org/

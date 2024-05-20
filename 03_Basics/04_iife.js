// Immediately Invoked Function Expression(IIFE)

//we want to execute a function as soon we write a function
//One reason being that the function might get polluted by global variables
//other reason being for immediate execution(eg: connection with Database is established as soon the file is executed)



(function chai(){
    console.log(`DB Connected`);
})();//this is a named IIFE

//SYNTAX
//First parenthesis here is defination of function
//second paranthesis is execution of function or function call
//we have to GIVE COMMAND to end this Invoked by using semi colon at the end

//now eg in arrow fumction 

((name)=>{
    console.log(`DB Connected To${name}`);

})("shivanshu")//this is unNamed IIFE, with parameters passed in it
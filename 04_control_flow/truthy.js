const userEmail = []

if(userEmail){//assuming the value in userEmail is True without comparision, truthy value
    console.log("Got user email");
}
else{
    console.log("don't have email");
}

//falsy values(false,0,-0,bigInt(on),"",null,undefined,NaN)

//truthy values(true,"0",,'false'," ",[],{},function(){},)


if(userEmail.length === 0){
    console.log("array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){//checking whether the object is empty or not
    console.log("empty object");
}

//nullish coalescing operator(??):null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

// val1 = null?? 10 ?? 20

val1 = null ?? undefined


console.log(val1);


//Ternary operator

// condition ? true : false

const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
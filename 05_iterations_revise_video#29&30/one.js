//FOR Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // if(element == 5){
    //     console.log("5 is best number");
    // }
    // console.log(element);
}

// console.log(element);//outside the scope


for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop ${j} and outer loop value is ${i}`);
        console.log(i + '*' + j + '=' +i*j);//table from 0 to 10
    }
}


let myArray = ["flash","batman","superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

//break keyword

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("detected 5");
        break;//we use break to break the control flow
    }
    console.log(`value of i is ${i}`);
    
}

//continue keyword

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("detected 5");
        continue;
        //we use continue to skip taht one particular scenerio in the the control flow(eg: 5 is skipped and rest execution is done)
    }
    console.log(`value of i is ${i}`);
    
}
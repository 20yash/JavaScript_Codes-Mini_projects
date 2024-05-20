//ForIn
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


//FORIN for objects

const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
   

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")

for (const key in map) {
    console.log(key);
    
}
//map is non iterable, therfore no output here
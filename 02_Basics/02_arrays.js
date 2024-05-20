const marvel_heros=["thor","ironman","spiderman"]

const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][1]);

allHeros=marvel_heros.concat(dc_heros)

console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
//spread,each element is separate

console.log(allNewHeros);

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity) 
//removes extra arraty within an arrray
console.log(realAnotherArray);

console.log(Array.isArray("Shivanshu"));
console.log(Array.from("Shivanshu"));
console.log(Array.from({name: "shivanshu"}));//intresting case as outpiut is [], we need to mention what we want for the array; from keys or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//returns a new array from set of elements
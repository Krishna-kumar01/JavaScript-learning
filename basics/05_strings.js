const name ="Krishna"
const repoCount = 50

//console.log(name + repoCount + "kumar" );

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Krishu Coder")
/*
console.log(gameName[0]);

console.log(gameName._proto_);

console.log(gameName.length);// Length of string
console.log(gameName.toUpperCase());//to cover the Upper case of value
console.log(gameName.toLowerCase()); //conver to lowercase of string
console.log(gameName.charAt(2)); // which cahrecter at 2 position
console.log(gameName.indexOf('C')); // which number have  this index 
*/
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const newStringOne = "   krishna   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the space both side 

const url = "https://krishna.com/krishna%20kumar"
console.log(url.replace('%20' , '-'));

console.log(url.includes('sundar'));

const secondString = new String('Kishu-coder-youtube-chennal')
console.log(secondString.split('-'));


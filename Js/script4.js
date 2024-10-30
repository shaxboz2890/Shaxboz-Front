'use strict'

// if(false){
//     console.log('true');
// }else{
//     console.log('false');

// }
// let num =2

// if(2){
//    console.log(2);
// }else (6){
//     console.log(6);
// }


// let num = 100

// if (num%2 === 0){
//     console.log("It`s Even");
// }else{
//     console.log("It`s Odd"); 
// }



function replaceFirstLetter(string, symbol) {
    const firstLetter = string.charAt(0);
    const modifiedString = string.replace(new RegExp(firstLetter, 'gi'), symbol);
    return firstLetter + modifiedString.slice(1);
}



let string = `This is test text`;
let symbol = "#";

console.log(replaceFirstLetter(string, symbol));

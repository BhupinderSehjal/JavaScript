"use strict";

console.log("\n Rest parameter = It allows us to collect an indefinite number of arguments passed to a function in the form of an array");

console.log("It is denoted by three dots (...) \n \n");


console.log("Program");
function calculateSum(...args){
    let sum = 0;
    args.forEach(function(element)
{
    sum += element;
});
return sum;
}

let s = calculateSum(3,5,7,9);
console.log(s + " ");
s = calculateSum(3,5,7,9,11);
console.log(s + " ");
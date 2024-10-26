"use strict";

console.log("push() method = is used to add an element at the end of an array");
//example
console.log("this is push() method");
let modules = new Array("HTML","CSS","BOOTSTRAP","DBMS" );
console.log(modules);
//NOW IF WE AWANT TO ADD ONE MORE ELEMNT THEN WE USE PUSH

modules.push("PHP"); //THIS WILL ADD PHP IN ARRAY

console.log(modules);


console.log("pop() method = It fetches the last element of the array and then removes it from the array");
//example
console.log("this is pop() method");
let section = new Array("HTML","CSS","BOOSTRAP","DBMS","PHP");
console.log(section);
//NOW IF WE WANT TO REMOVE AN ARRAY ITEM THEN WE USE POP

section.pop();

console.log(section);

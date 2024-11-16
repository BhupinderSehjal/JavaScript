let score = "33";
//console.log(typeof score);       //OUTPUT:string
//console.log(typeof(score));      //OUTPUT:string

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);     //OUTPUT:number
//console.log(valueInNumber);            //OUTPUT:33

//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0;

let isLoggedIn = "Bhupinder;"
//let boolIsLoggedIn = Boolean(isLoggedIn);
//console.log(boolIsLoggedIn);

//1 =>true; 0 =>false;
// "" =>false;
// "Bhupinder" =>true

let someNumber = 33;

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);



/*Implicit Conversion(Type coercion)
 => Javascript automatically converts datatypes when necessary, often leading to unexpected results if not understood considr these examle:-
*/
 let result = "10" + 20;
 // console.log(result);
 // console.log(typeof result);
 // Both operands are converted to string 

 //Subtracting a string from a number
 let difference = 50 - "25";
 // console.log(difference);
 // console.log(typeof difference);
 //The string "25" is converted to a number

 /*Explicit conversion
  =>To have more control over the conversion process javscript provider built in function */

//1.Number() =>Converts a value to a number

// ~String to a Number
let num = Number("42");
//console.log(num);
//console.log(typeof num);


// ~Boolean to Number
let numBool = Number(true);
//console.log(numBool);
//console.log(typeof numBool);
let numBool2 = Number(false);
//console.log(numBool2);
//console.log(typeof numBool2);

//null and Undefined to Number

let numNull = Number(null);
//console.log(numNull);
let numNull2= Number(undefined);
//console.log(numNull2)



// 2. String() => converts a value to a string

// ~number to string 
let str = String(42);
//console.log(str);

// ~Boolean to string
 let str1 = String(true);
 //console.log(str1);
 let str2 = String(false);
 //console.log(str2);

 // ~null and undefined to string
 let str3 = String(null);
 //console.log(str3);
 //console.log(typeof str3)

 let str4 = String(undefined);
 //console.log(str4);
 //console.log(typeof str4);



// 3.Boolean

// ~number to Boolean
let bool =  Boolean(0);
//console.log(bool);

let bool1 = Boolean(42);
//console.log(bool1);

// ~string to Boolean

let bool3 = Boolean("");
//console.log(bool3);

let bool4 = Boolean("Hello");
//console.log(bool4);

// ~Null and undefined to Boolean

let bool5  = Boolean(null);
//console.log(bool5);

let bool6 = Boolean(undefined);
//console.log(bool6);


/*
Important Considerations:

NaN: If a conversion fails to produce a valid number, the result is NaN.

Loose Equality (==): JavaScript often performs implicit conversion during comparisons with ==. Use strict equality (===) to avoid unintended type coercion.

Be Mindful of Implicit Conversion: While it can be convenient, it can lead to unexpected results if not understood. Always be aware of the potential pitfalls and use explicit conversion when necessary.
*/
```javascript
// VARIABLES
// Variables are named values and can store any type of JavaScript value.

// Here’s how to declare a variable:

// EXAMPLE
var x = 100;
// And here’s what’s happening in the example above:

// var is the keyword that tells JavaScript you’re declaring a variable.
var x; // Declaration
// x is the name of that variable.
x = 100; // Initialization (or assignment)

// = is the operator that tells JavaScript a value is coming up next.
// 100 is the value for the variable to store.


// Using variables
// After you declare a variable, you can reference it by name elsewhere in your code.

// EXAMPLE
var x = 100;
x + 102; // This expression evaluates to 202

// OUTPUT
// 202


// You can even use a variable when declaring other variables.

// EXAMPLE
var x = 100;
var y = x + 102; // Using x to declare y
y; // y holds the value 202

// OUTPUT
// 202


// Reassigning variables
// You can give an existing variable a new value at any point after it’s declared.

// EXAMPLE
var weather = "rainy"; // Initial assignment
weather = "sunny"; // Reassigning the value of weather
weather; // weather now holds "sunny"

// OUTPUT
// "sunny"


// Naming variables
// Variable names are pretty flexible as long as you follow a few rules:

// Start them with a letter, underscore _, or dollar sign $.
// After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
// Don’t use any of JavaScript’s reserved keywords.
// With that in mind, here are valid variable names:

// EXAMPLE
var camelCase = "lowercase word, then uppercase"; // Valid variable name
var dinner2Go = "pizza"; // Valid variable name
var I_AM_HUNGRY = true; // Valid variable name
var _Hello_ = "what a nice greeting"; // Valid variable name
var $_$ = "money eyes"; // Valid variable name


// And here are some invalid variable names — try to spot what’s wrong with each of them:

// EXAMPLE
var total% = 78; // Invalid: % is not allowed in variable names
var 2fast2catch = "bold claim"; // Invalid: Cannot start with a number
var function = false; // Invalid: function is a reserved keyword
var class = "easy"; // Invalid: class is a reserved keyword


// Variable names are case-sensitive, so myVar, MyVar, and myvar are all different variables. 
// But generally, it’s a good practice to avoid naming variables so similarly.
```

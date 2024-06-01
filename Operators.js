OPERATORS
Operators are the symbols between values that allow different operations like addition, subtraction, multiplication, and more. JavaScript has dozens of operators, so let’s focus on the ones you’re likely to see most often.

Arithmetic
The + operator adds two numbers.

EXAMPLE
1 + 2;
OUTPUT
3

The - operator subtracts one number from another.

EXAMPLE
50 - 15;
OUTPUT
35

The * operator multiplies two numbers. Notice it’s an asterisk and not the × symbol commonly used in math.

EXAMPLE
3 * 12;
OUTPUT
36

The / operator divides one number by another. Notice it’s a forward slash and not the ÷ symbol commonly used in math.

EXAMPLE
12 / 4;
OUTPUT
3

JavaScript expressions follow an order of operations, so even though + is written first in the following example, the multiplication happens first between the last two numbers and *.

EXAMPLE
1 + 100 * 5;
OUTPUT
501

If want more control over the order, that’s where the grouping operator comes in handy.

Grouping
() operator groups other values and operations. Code located between parentheses evaluates first as JavaScript solves each operation moving from left to right. Adding the grouping operator to the previous example causes 1 + 100 to evaluate first.

EXAMPLE
(1 + 100) * 5;
OUTPUT
505
Concatenation
The + operator can also concatenate strings, which is another way of saying it can add them together.

EXAMPLE
"news" + "paper";
OUTPUT
"newspaper"
Assignment
The = operator assigns values. It’s used for setting the value of variables.

EXAMPLE
var dinner = "sushi";

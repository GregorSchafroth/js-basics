// ARITHMETIC
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(++x) // increment
console.log(x++)
console.log(x)
console.log(--y) //decrement
console.log(y--)
console.log(y)

// ASSIGNMENT
let a = 10;
a++;
a = a + 5; // addition
a += 5;
x = x * 3; // multiplication ... the same works with all others
x *= 3;

// COMPARISON
let b = 1;
console.log(b > 0); // Relational
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);
console.log(b === 1); // Equality
console.log(b == 1);
console.log(b === '1'); // For the strict equality operator this is false
console.log(b == '1'); 
console.log(b !== 1);
// If a customer has more than 100 points, they are a 'gold' customer. 
// Otherwise, they are a 'silver' customer
let points = 90;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)

// LOGICAL
// Logical AND (&&) returns TRUE if both operants are TRUE
console.log('&&');
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
// Logical OR (||) returns TRUE if either operants are TRUE
console.log('||');
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
// Logical NOT (!) returns the oposit value
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan;
applicationRefused ? console.log('application refused') : console.log('eligible for Loan')
// Logical Operators with Non-booleans
console.log(false || true)
console.log(false || 'Mosh') // This logs 'Mosh'
console.log(false || 1 || 2) // The operation stops at the first truthy operand, so result is '1'
// Falsy values: false, undefined, null, 0, '', NaN
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor
console.log(currentColor)

// BITWISE
// 1 = 0001
// 2 = 0010 ...
console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND
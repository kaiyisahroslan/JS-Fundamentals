const num1 = 3;
const num2 = 5;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2; // can get answer in decimal
val = num1 % num2; // remainder

// Math Object
val = Math.PI;
val = Math.E; // Euler's
val = Math.round(2.4); // Method & Function is the same
val = Math.ceil(2.2); // Round off to large number
val = Math.floor(2.2); // Round off to small number
val = Math.sqrt(81); //Square root
val = Math.abs(-6); // Absolute
val = Math.pow(2,3); // Power of : 2 power of 3
val = Math.min(22,3,56,98,0,-150,234);
val = Math.max(22,3,56,98,0,-150,234);
val = Math.random(); // random number between 0 and 1

val = Math.floor(Math.random()*20+1); // random number from 1 to 20
val = Math.floor(Math.random()*20); // random number from 0 to 20





console.log(val);
let val;

// Number to string
val = String(555);

// Boolean to string
val = String(true);

// Array to string
val = String([1,2,3]);

// String to number
val = Number('5');
val = Number('hello'); // NaN : not a number

// Null to number
val = Number(null);

// Boolean to number
val = Number(true);
val = Number(false);

console.log(val);
console.log(typeof val);
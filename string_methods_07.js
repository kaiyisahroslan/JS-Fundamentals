const firstName = 'John';
const lastName = 'Doe';
const age = 40;
const text = 'Hello from Javascript';
const topics = 'software,cloud,security,marketing';

let val;

val = firstName + lastName;

// Concatination
val = firstName + ' ' + lastName;

//Append
val = 'Sara ';
val += 'Smith';

val = 'Hello my name is ' + firstName + ' and my last name is ' + lastName;

// Escaping
val = 'That\'s awesome'; // add \ before '

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ' + lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf
val = firstName.indexOf('h');

// charAt
val = firstName.charAt(0);

// How to last character
val = firstName.charAt(firstName.length-1);

// Substring
val = firstName.substring(0,3);

// slice()
val = firstName.slice(0,3);
val = firstName.slice(-2); // count from back

// split()
val = text.split(' ');
val = topics.split(',');

// replace()
val = text.replace('Javascript', 'react.js');

// Includes
val = text.includes('sara'); // search for sara in text (case sensitive)
val = text.includes('Hello');

console.log(val);
/* if (condition we want to check){
    do somethong;
} else {
    do something else;
}; */

const id = 100;

// Equal to ==
/* if (id == 100){
    console.log('correct');
} else {
    console.log('incorrect');
}; */

// Not equal to : !=
/* if (id != 100){
    console.log('Not equal to 100');
} else {
    console.log('Equal to 100');
}; */

// Equal type and value : ===
/* if (id === 100){
    console.log('correct');
} else {
    console.log('incorrect');
}; */

// Not equal type and value : !==
/* if (id !== 100){
    console.log('correct');
} else {
    console.log('incorrect');
}; */

// Greater than and less than
/* if (id >= 100){
    console.log('correct');
} else {
    console.log('incorrect');
}; */

// if else statement
/* const color = 'red';

if (color === 'red'){
    console.log('Color is red');
} else if (color === 'blue'){
    console.log('Color is blue');
} else if (color === 'green'){
    console.log('Color is green');
} else {
    console.log('Color not found');
}; */

// Logical Operators
// && / ||

const name = 'Sara';
const age = 13;

// && and
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
};

// || or
if (age < 16 || age > 65){
    console.log(`${name} can not run the race`);
} else {
    console.log(`${name} is registered for the race`);
};

// Ternary operators
console.log((id === 100 ? 'correct' : 'incorrect'));

// Without braces
if (id === 100)
console.log('correct');
else
console.log('incorrect')




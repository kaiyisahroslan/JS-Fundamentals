// 1
// create an array of colors (4 colors)
// use array methods to add a color to end of that array
// use array methods to add a color to the beginning of that array
// check the length of that array

// const colors = ['blue', 'green', 'red', 'pink'];

// let val;

// colors.push('yellow');

// colors.unshift('black');

// val = colors.length;

// console.log(val);
// console.log(colors);

// 2
//create an object with 3 properties 
//print in console the value of each property 

// const cat = {
//     name : 'bear',
//     breed : 'british shorthair',
//     age : 5
// }

// let val;

// val = cat;

// val = cat.name;
// val = cat.breed;
// val = cat.age;

// console.log(cat);

// 3
// Create an array of colors (4 colors)
// Loop this array

// const colors = ['blue', 'green', 'red', 'pink'];

// for (let i = 0 ; i < colors.length ; i++) {
//     console.log(i+1, colors[i]);
// }

// 4
// Declare a function to receive 2 numbers and add them
// Make sure to pass default values as well

// function add(num1 = 1, num2 = 2) {
//     return num1 + num2;
// };

// console.log(add(2,5));

// // Example :
// function add_2_num(a=1,b=2){
//     return a+b
// }

// let a_num = add_2_num(4,5)
// console.log(a_num)

// 5
// Create an array of objects (3 objects) and each objs (2 properties)
// Loop the array to get access to one of the property

const students = [
    {name : 'Nur', age : 10},
    {name : 'Ili', age : 12},
    {name : 'Amira', age : 15}
];

students.forEach(function(i, index){
    console.log('Student ' + (index+1) + ' : ' + i.name);
});

// Example

// let an_array = [
//     { name: "adidas", item_type: "shoes" }, 
//     { name: "nike", item_type: "t-shirt" }, 
//     { name: "puma", item_type: "bag" }
// ]
// for (let j = 0; j < an_array.length; j++) {
//     console.log(an_array[j].name);
// }
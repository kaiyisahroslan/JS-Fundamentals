// Arrays creation
const numbers = [43, 55, 65, 90, 85, 100, 456];
const colors = new Array('pink', 'green', 'red');

let val;

// Get array length
val = numbers.length;

// Check if array is an array
val = Array.isArray(numbers);

// Get single value
val = numbers[2];
val = colors[2];

// Insert value to array
//numbers[2] = 250;

// Find the indexOf
val = numbers.indexOf(100);

// Manipulate the array

// Add on to the end of an array
numbers.push(300);

// Add on to the beginning of an aray
numbers.unshift(800);

// Remove from the end
numbers.pop();

// Remove from the beginning
numbers.shift();

// splice()
//numbers.splice(2,4); // 2 is the index number then count 4 start from that

// reverse()
//numbers.reverse(); 

// Concat arrays
val = numbers.concat(colors);

// Sort
val = colors.sort();
//val = numbers.sort(); // machine only grab the first number

// Compare function

// sort ascending order
// val = numbers.sort(function(x,y) {
//    return x-y;
// });

// sort descending order
// val = numbers.sort(function(x,y) {
//    return y-x;
// });

// Find
val = numbers.find(function(num) {
    return num > 50;
});

console.log(val);
//console.log(numbers);
//console.log(colors);
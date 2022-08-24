// General Loops

// For Loop
// (starting point; where to end; how much to increment)

// for (let i = 0 ; i < 10 ; i++) {
//     if (i === 2) {
//         console.log('Number 2 found');
//         continue; // Not going to show Number 2 again kat console log bawah sekali
//     }
//     if (i === 8) {
//         console.log('Loop ends');
//         break; // Will stop the loops
//     }
//     console.log('Number ' + i);
// };

// While Loop
// (starting point; where to end; how much to increment)

// let i = 10;

// while (i > 5) {
//     console.log('Number ' + i);
//     i--;
// }; 

// Do While Loop

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// }
// while (i < 10);

// Loop through array
// forEach method

// When you pass a function to another function as parameter, its called callback function

const numbers = [11,22,33,44,55,66];

numbers.forEach(function(i, index){
    console.log(index, i);
});

for (let i = 0 ; i < numbers.length ; i++) {
    console.log(i, numbers[i]);
}
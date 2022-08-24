let val;

const today = new Date();

val = today.getMonth(); // 7 - August because counting starts with 0
val = today.getSeconds();
val = today.getDay(); // 3 - Wednesday, 0 - Sunday
val = today.getFullYear();
val = today.getHours();

console.log(val);
// console.log(today);
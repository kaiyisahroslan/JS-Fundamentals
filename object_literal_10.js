const person = {
    firstName : 'Sara',
    lastName : 'Smith',
    age : 30,
    email : 'sara@gmail.com',
    address : {
        city : 'Kuala Lumpur',
        country : 'Malaysia'
    },
    hobbies : ['cooking', 'yoga']
}

let val;

val = person;

// Get a specific value
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.address;
val = person.hobbies;

// access object
val = person.address.city;
val = person.address.country;

// access array
val = person.hobbies[0];
val = person.hobbies[1];

//console.log(val);

const customers = [
    {id : 1, name : 'Sara'},
    {id : 2, name : 'John'},
    {id : 3, name : 'Kim'}
];

val = customers[0].id;
val = customers[1].name;

console.log(val);
console.log(customers);
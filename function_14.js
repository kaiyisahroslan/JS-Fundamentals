// Function declaration
// function ... (){};

function greeting(firstName = 'John', lastName = 'Doe') {
    // console.log('Welcome to the academy');
    // if (typeof firstName === 'undefined'){firstName = 'John'} - set up default value
    // if (typeof lastName === 'undefined'){lastName = 'Doe'} - set up default value
    return 'Welcome ' + firstName + ' ' + lastName;
};

// greeting();
console.log(greeting('Sara', 'Smith'));
// console.log(greeting());

// Function expression

// a =2 : set up default value
const sqr = function (a=2){
    return a * a;
};

// sqr();
console.log(sqr(9));

// IIFEs (IMMEDIATELY INVOKABLE FUNCTION EXPRESSION)
//(function)(parameter)

(function(){
    console.log('Function ran ... ');
})();

(function(name){
    console.log('Hello ' + name);
})('Sara');

// When a function is a property of an object, we call it method

const todo = {
    add: function(){
        console.log('Add todo ... ');
    },
    edit: function(){
        console.log('Edit todo ... ');
    }
};

todo.add();
todo.edit();
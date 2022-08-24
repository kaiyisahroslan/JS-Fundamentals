const firstName = 'Sara';
const age = 37;
const job = 'Developer';

let val;

// Without template literals
val = '<ul>' +
'<li>Name: ' + firstName + '</li>' + 
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + '</li>' +
'</ul>'; // use '' for all html tags used in js

// With template literals
val = `
<ul>
<li>Name: ${firstName}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
</ul>`;

 document.body.innerHTML = val;
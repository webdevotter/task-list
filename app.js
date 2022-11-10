// REPLACE ELEMENT

//Create ELement
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

//new text node
nTn = document.createTextNode('Task List');
newHeading.appendChild(nTn);

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove specific list item
// lis[0].remove();
list.removeChild(lis[2]);

// CLASSES & ATTR

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link.removeAttribute('title');
val = link;


console.log(val);
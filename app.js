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


console.log(newHeading);
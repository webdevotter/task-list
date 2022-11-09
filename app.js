let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment 
// 9 - Document itself 
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'Hello';

// Children of children

list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

//Last Child
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

console.log(val);
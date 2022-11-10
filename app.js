const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
//Keyup
// taskInput.addEventListener('keydown', runEvent);
//Keydown
// taskInput.addEventListener('keyup', runEvent);
//Keypress
// taskInput.addEventListener('keypress', runEvent);
//Focus
// taskInput.addEventListener('focus', runEvent);
//Blur
// taskInput.addEventListener('blur', runEvent);
//Cut
// taskInput.addEventListener('cut', runEvent);
//Paste
// taskInput.addEventListener('paste', runEvent);
//Event
// taskInput.addEventListener('input', runEvent);
// Change Event
select.addEventListener('change', runEvent);


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);
  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
//set local storage item
// localStorage.setItem('firstName', 'John');
// localStorage.setItem('age', '30');

// //set session storage item

// sessionStorage.setItem('name', 'Beth');

//remove from storage
// localStorage.removeItem('name');

//get from storage

// const name = localStorage.getItem('firstName');
// const age = localStorage.getItem('age');
// console.log(name, age);

// localStorage.clear();

document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks =[];
    } else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    task.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');

    e.preventDEfault();
  
});


 const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});

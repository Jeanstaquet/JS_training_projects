// Define UI Vars
form = document.querySelector('.add');

form.addEventListener("click", addTask);

function addTask(e){
    const li = document.createElement('li');
    
    li.innerHTML = document.querySelector("#task").value;
    
    document.querySelector("#tasks").append(li);

    document.querySelector("#task").value = "";

    e.preventDefault();
};












// document.addEventListener('DOMContentLoaded', () => {

//     document.querySelector('#new-task').onsubmit = () => {

//         // Create new item for list
//         const li = document.createElement('li');
//         li.innerHTML = document.querySelector('#task').value;

//         // Add new item to task list
//         document.querySelector('#tasks').append(li);

//         // Clear input field
//         document.querySelector('#task').value = '';

//         // Stop form from submitting
//         return false;
//     };

// });
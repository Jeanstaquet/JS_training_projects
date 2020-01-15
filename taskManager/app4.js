// Define UI Vars
const form = document.querySelector('.add');
const rmv = document.querySelector('.rmv');
const bbdy = document.querySelector("body");

const count = 0;

loadEventListeners();

function loadEventListeners(){
    form.addEventListener("click", addTask);
    rmv.addEventListener("click", rmvtask);
    bbdy.addEventListener('mousemove', coord)
};


function addTask(e){
    //Add a task
    const li = document.createElement('li');
    
    li.innerHTML = document.querySelector("#task").value;

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash"></i>';

    li.appendChild(link);
    //Append a task to the ul
    document.querySelector("#tasks").append(li);

    document.querySelector("#task").value = "";
    //Prefent default behavior from the button
    e.preventDefault();
};

function rmvtask(e){
    //Select andremove a task
    const lis = document.querySelectorAll('li');
    lis[0].remove()
};

function coord(e){
    //Get the coord on screen
    const xcoord = e.clientX;
    const ycoord = e.clientY;
    document.querySelector('h2').innerText = `MouseX:${xcoord}  MouseY:${xcoord}`;

    document.querySelector('body').style.color = `rgb(${xcoord}, ${xcoord}, 75)`;
};

//ALL is ok
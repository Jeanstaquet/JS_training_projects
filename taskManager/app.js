// Define UI Vars
const form = document.querySelector('.add');
const rmv = document.querySelector('.rmv');
const bbdy = document.querySelector("body");

form.addEventListener("click", addTask);

function addTask(e){
    const li = document.createElement('li');
    
    li.innerHTML = document.querySelector("#task").value;
    
    document.querySelector("#tasks").append(li);

    document.querySelector("#task").value = "";

    e.preventDefault();
};

rmv.addEventListener("click", rmvtask);

function rmvtask(e){
    const lis = document.querySelectorAll('li');
    lis[0].remove()
};


bbdy.addEventListener('mousemove', coord);

function coord(e){
    const xcoord = e.clientX;
    const ycoord = e.clientY;
    document.querySelector('h2').innerText = `MouseX:${xcoord}  MouseY:${xcoord}`;

    document.querySelector('body').style.color = `rgb(${xcoord}, ${xcoord}, 75)`;
};









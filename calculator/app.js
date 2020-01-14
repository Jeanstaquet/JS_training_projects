// define const
const val1 = document.querySelector("#value1");
const val2 = document.querySelector("#value2");
const ope = document.querySelector("#operator")

loadEventlistenners();

function loadEventlistenners(){
    document.querySelector('#but1').addEventListener('click', calculate);
    document.querySelector('#but2').addEventListener('click', rst);
    document.querySelector('#but3').addEventListener('click', rstHistory);

};

function calculate(){
    //Check if the both values are only numbers
    str1 = String(val1.value);
    str2 = String(val1.value);
    for (let i = 0; i < str1.length; i++){
        if (isNaN(str1[i]) === true){
            alert("You should only use Numbers");
            return -1;
        } 
    };
    for (let i = 0; i < str2.length; i++){
        if (isNaN(str2[i]) === true){
            alert("You should only use Numbers");
            return -1;
        } 
    };


    //Calculate the answer
    let a = 0;
    if (ope.value === "+") {
        a = Number(val1.value) + Number(val2.value);
    } else if (ope.value === "-"){
        a = Number(val1.value) - Number(val2.value);
    }else if (ope.value === "/"){
        a = Number(val1.value) / Number(val2.value);
    }else if (ope.value === "*"){
        a = Number(val1.value) * Number(val2.value);
    }else if (ope.value === "^"){
        a = Math.pow(val1.value, val2.value);
    };

    //Display the answer
    document.querySelector("#result").innerHTML = `${val1.value} ${ope.value} ${val2.value} is equal to ${a}`;

    //Append the result to the history
    const li = document.createElement("li");
    li.innerHTML = `${val1.value} ${ope.value} ${val2.value} is equal to ${a}`;
    document.querySelector("#history-list").append(li);
    
    //Clean the boxes
    val1.value = "";
    val2.value = "";
    };

//Reset both boxes
function rst(){
    //Reset the boxes
    val1.value = "";
    val2.value = "";
    document.querySelector("#result").innerHTML = "";
}

//Reset the all history
function rstHistory(e){
    while(document.querySelector("ul").firstChild) {
        document.querySelector("ul").removeChild(document.querySelector("ul").firstChild);
    };
}
// // Remove Task
// function removeTask(e) {
//     if(e.target.parentElement.classList.contains('delete-item')) {
//       if(confirm('Are You Sure?')) {
//         e.target.parentElement.parentElement.remove();
//       }
//     }
//   }
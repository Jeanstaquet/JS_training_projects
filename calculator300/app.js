// define const
const val1 = document.querySelector("#value1");
const val2 = document.querySelector("#value2");
const ope = document.querySelector("#operator")

loadEventlistenners();

function loadEventlistenners(){
    document.addEventListener('DOMContentLoaded', getCalculus);
    document.querySelector('#but1').addEventListener('click', function (e) {
        document.querySelector("#result").style.display = "none";
        document.querySelector("#loading").style.display = "block";
        setTimeout(calculate, 1000);
    });
    document.querySelector('#but2').addEventListener('click', rst);
    document.querySelector('#but3').addEventListener('click', rstHistory);

};

//Display on the screen from the local storage
function getCalculus() {
    let calcul;
    if(localStorage.getItem('calcul') === null){
        calcul = [];
    }else{
        calcul = JSON.parse(localStorage.getItem('calcul'));
    };

    calcul.forEach(function(cal){
        const li = document.createElement('li');
        li.innerHTML = cal;
        document.querySelector("#history-list").append(li);
    });

};

function calculate(){
    //Check if the both values are only numbers
    str1 = String(val1.value);
    str2 = String(val1.value);
    for (let i = 0; i < str1.length; i++){
        if (isNaN(str1[i]) === true){
            showError('Please check your numbers');
            return -1;
        } 
    };
    for (let i = 0; i < str2.length; i++){
        if (isNaN(str2[i]) === true){
            showError('Please check your numbers');
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
    document.querySelector("#result").innerHTML = `Result: ${val1.value} ${ope.value} ${val2.value} is equal to ${a}`;

    //Append the result to the history
    const li = document.createElement("li");
    li.innerHTML = `${val1.value} ${ope.value} ${val2.value} is equal to ${a}`;
    document.querySelector("#history-list").append(li);

    //show the answer after the spinner, hide the spinner
    document.querySelector("#result").style.display = "block";
    document.querySelector("#loading").style.display = "none";

    //Store in the local storage
    storeCalInLocalStorage(li.innerHTML);
    
    //Clean the boxes
    val1.value = "";
    val2.value = "";
    };

//Show the error in a new textbox + counter of disparition
function showError(error){
    const errorDiv = document.createElement("p");
    const conten = document.querySelector(".error-msg");
    errorDiv.className = "to-clean"
    errorDiv.innerHTML = error;
    conten.appendChild(errorDiv);

    //clear the msg
    setTimeout(clearerr, 3000);
};

//Clean the error
function clearerr(){
    document.querySelector(".to-clean").remove();
};

//Reset both boxes
function rst(){
    //Reset the boxes
    val1.value = "";
    val2.value = "";
    document.querySelector("#result").innerHTML = "";
}

//Append to the local storage from the history
function storeCalInLocalStorage(cal){
    let calcul;
    if(localStorage.getItem('calcul') === null){
        calcul = [];
    }else{
        calcul = JSON.parse(localStorage.getItem('calcul'));
    }

    calcul.push(cal);

    localStorage.setItem('calcul', JSON.stringify(calcul));
}

//Reset the all history and local storage
function rstHistory(e){
    while(document.querySelector("ul").firstChild) {
        document.querySelector("ul").removeChild(document.querySelector("ul").firstChild);
    };

    localStorage.clear();
}

// define const
const val1 = document.querySelector("#value1");
const val2 = document.querySelector("#value2");
const ope = document.querySelector("#operator")

loadEventlistenners();

function loadEventlistenners(){
    document.querySelector('button').addEventListener('click', calculate);
};

function calculate(){
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
    }

    //Display the answer
    document.querySelector("#result").innerHTML = `${val1.value} ${ope.value} ${val2.value} is equal to ${a}`;

    };
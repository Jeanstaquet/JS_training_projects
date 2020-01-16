// Generating the number
var num1 = Math.round(Math.random() * 10);
var life = 3;

loadEventlistenners();

function loadEventlistenners() {
    document.addEventListener('DOMContentLoaded', getScores);
    document.querySelector("#guess-value").addEventListener("click", playerTry);
};

//Display on the screen from the local storage
function getScores() {
    let calcul;
    if(localStorage.getItem('score') === null){
        calcul = [];
    }else{
        calcul = JSON.parse(localStorage.getItem('score'));
    };

    calcul.forEach(function(cal){
        // const li = document.createElement('li');
        // li.innerHTML = cal;
        // document.querySelector("#history-list").append(li);
        let trow = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = cal;
        trow.appendChild(td);
        document.querySelector("#table-content").appendChild(trow);

    });

};



function playerTry(e){
    const playerGuess = document.querySelector("#guess-input").value;
    if (playerGuess < num1) {
        document.querySelector("#guess-input").style.borderColor = "red";
        document.querySelector(".message").style.color = "red";
        document.querySelector(".message").innerHTML = `Too Low !!`;
        life --;
        document.querySelector("#lifes").innerHTML = `${life}`;
        loose();
    
    } else if (playerGuess > num1) {
        document.querySelector(".message").innerHTML = "Too High !!";
        life --;
        document.querySelector("#lifes").innerHTML = `${life}`;
        loose();
        

    } else {
        document.querySelector("#guess-input").style.borderColor = "green";
        document.querySelector("#guess-input").disabled = true;
        document.querySelector(".message").style.color = "green";
        document.querySelector(".message").innerHTML = "Nice !!";
        let trow = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = `Remaining life : ${life}`
        trow.appendChild(td);
        document.querySelector("#table-content").appendChild(trow);
        storeCalInLocalStorage(td.innerHTML);
        document.querySelector("#guess-input").value = "";
        (function() {
            setTimeout(newGame, 1000);
        })();
        
    };
    
    //e.preventDefault();
};


function newGame(){
    if (confirm("New Game ?")) {
        document.querySelector(".message").style.color = "black";
        document.querySelector("#guess-input").style.borderColor = "gray";
        document.querySelector("#guess-input").disabled = false;
        life = 3;
        document.querySelector("#lifes").innerHTML = `${life}`;
        num1 = Math.round(Math.random() * 10);
        document.querySelector(".message").innerHTML = "";
        loadEventlistenners();
    }
}

function loose(){
    if (life === 0){
        document.querySelector(".message").innerHTML = `You have ${life} live, you lost !! The correct number was ${num1}`;
        document.querySelector("#guess-input").remove();
        

    }
}

function storeCalInLocalStorage(cal){
    let calcul;
    if(localStorage.getItem('score') === null){
        calcul = [];
    }else{
        calcul = JSON.parse(localStorage.getItem('score'));
    }

    calcul.push(cal);

    localStorage.setItem('score', JSON.stringify(calcul));
}
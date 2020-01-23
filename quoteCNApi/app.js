document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
    const number = document.querySelector("input[type='number']").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true) //true pour asyn

    //Ce que nous voulons faire quand nous avons les données
    xhr.onload = function() {
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response)
        }
    }


    xhr.send()

    e.preventDefault();
};
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    //check si la touche shift est enfoncée
    // et si la box est checkée
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
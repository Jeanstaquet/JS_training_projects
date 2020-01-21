const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    // le "" est pour le changement de couleur
    const suffix = this.dataset.sizing || "";

    //uptdate la var CSS
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //le suffix est pour ajouter les px
};

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

// Le blur event pour vérifier à chaque fois que nous sortons du champ avec le curseur, qu'on a bien entré le bon format voulu

document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zip").addEventListener("blur", validateZip);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);

function validateName() {
    const name = document.querySelector("#name");
    const re = /^[a-zA-Z]{2,10}$/;
    
    // Si c'est false, nous mettons une  classe erreur, si c'est bon, nous l'enlevons
    if(!re.test(name.value)) {
        name.classList.add("is-invalid");
    } else {
        name.classList.remove("is-invalid");
    }
}

function validateZip() {
    const zip = document.querySelector("#zip");
    //4 nombres à la fin en plus optionnel
    const re = /^[1-9]{4}([0-9]{4})?$/;
    
    // Si c'est false, nous mettons une  classe erreur, si c'est bon, nous l'enlevons
    if(!re.test(zip.value)) {
        zip.classList.add("is-invalid");
    } else {
        zip.classList.remove("is-invalid");
    }
}

function validateEmail() {
    const email = document.querySelector("#email");
    //le plus est pour dire un ou plus
    //le @ est un caractère litéral
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Si c'est false, nous mettons une  classe erreur, si c'est bon, nous l'enlevons
    if(!re.test(email.value)) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }
}

function validatePhone() {
    const phone = document.querySelector("#phone");
    //le plus est pour dire un ou plus
    //le @ est un caractère litéral
    const re = /[0-9]{9}/;
    
    // Si c'est false, nous mettons une  classe erreur, si c'est bon, nous l'enlevons
    if(!re.test(phone.value)) {
        phone.classList.add("is-invalid");
    } else {
        phone.classList.remove("is-invalid");
    }
}
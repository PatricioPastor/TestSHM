const formART = document.getElementById("ART");
const ART = document.getElementById("Form");
const formuART = document.getElementById("FormART");
const formuAltaART = document.getElementById("Formu");

const focusART = ()=> {
    formART.classList.add("focus");
    ART.classList.remove("focus");
    formuART.classList.remove("hide");
    formuAltaART.classList.add("hide");
}

const focusFormTwo = ()=> {
    formART.classList.remove("focus");
    ART.classList.add("focus");
    formuAltaART.classList.remove("hide");
    formuART.classList.add("hide");
}



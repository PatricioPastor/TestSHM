const formART = document.getElementById("ART");
const ART = document.getElementById("Form");

const focusART = ()=> {
    formART.classList.add("focus");
    ART.classList.remove("focus");
}

const focusFormTwo = ()=> {
    formART.classList.remove("focus");
    ART.classList.add("focus");
}



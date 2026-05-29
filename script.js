// script.js

// Side Menu Toggle

function toggleMenu(){

    document
    .getElementById("sideMenu")
    .classList.toggle("active");
}

// Dropdowns

const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display = "none";
        }

        else{
            content.style.display = "block";
        }

    });

});

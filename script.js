window.addEventListener("DOMContentLoaded", function () {
    function reveal() {
        let reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // run once on load
});

function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

let text = "I design & build beautiful web experiences";
let index = 0;

function typeEffect() {
    let element = document.getElementById("typing");

    if (index === 0) {
        element.innerHTML = ""; // clear first
    }

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();


function openProject(project) {
    if (project === "portfolio") {
        alert("Opening Portfolio project!");
       window.open("https://harshitareddynss.github.io/my-portfolio/")
    } 
    else if (project === "FixIt") {
        alert("Opening FixIt!");
        window.open("https://harshitareddynss.github.io/FixIt/")
    }
}

window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});



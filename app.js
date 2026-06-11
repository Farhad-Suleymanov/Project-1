let boxes = document.querySelectorAll(".b1");
let all = document.querySelector(".all");
let packaging = document.querySelector(".packaging");
let mockup = document.querySelector(".mockup");
let typography = document.querySelector(".tyograhpy"); 
let photography = document.querySelector(".photography");
let btns = document.querySelectorAll(".portfolio-bar li a")


packaging.addEventListener("click", (e) => {
    e.preventDefault();
    btns.forEach((k) =>{
        let cls = k.classList;
        if (cls[0] == "packaging"){
            k.style.color = "#0b6efd";
        }
        else{
            k.style.color = "#bdbdbd";
        }
    });
    boxes.forEach((a) => {
        let element = a.querySelector("span");

        if (element.textContent.toLowerCase() !== "packaging") {
            a.style.display = "none";
        } else {
            a.style.display = "flex";
        }
    });
});

mockup.addEventListener("click", (e) => {
    e.preventDefault();
    btns.forEach((k) =>{
        let cls = k.classList;
        if (cls[0] == "mockup"){
            k.style.color = "#0b6efd";
        }
        else{
            k.style.color = "#bdbdbd";
        }
    });
    boxes.forEach((a) => {
        let element = a.querySelector("span");

        if (element.textContent.toLowerCase() !== "mockup") {
            a.style.display = "none";
        } else {
            a.style.display = "flex";
        }
    });
});

typography.addEventListener("click", (e) => {
    e.preventDefault();
    btns.forEach((k) =>{
        let cls = k.classList;
        if (cls[0] == "tyograhpy"){
            k.style.color = "#0b6efd";
        }
        else{
            k.style.color = "#bdbdbd";
        }
    });
    boxes.forEach((a) => {
        let element = a.querySelector("span");

        if (element.textContent.toLowerCase() !== "typography") {
            a.style.display = "none";
        } else {
            a.style.display = "flex";
        }
    });
});

photography.addEventListener("click", (e) => {
    e.preventDefault();
        btns.forEach((k) =>{
        let cls = k.classList;
        if (cls[0] == "photography"){
            k.style.color = "#0b6efd";
        }
        else{
            k.style.color = "#bdbdbd";
        }
    });
    boxes.forEach((a) => {
        let element = a.querySelector("span");

        if (element.textContent.toLowerCase() !== "photography") {
            a.style.display = "none";
        } else {
            a.style.display = "flex";
        }
    });
});

all.addEventListener("click", (e) => {
    e.preventDefault();
    btns.forEach((k) =>{
        let cls = k.classList;
        if (cls[0] == "all"){
            k.style.color = "#0b6efd";
        }
        else{
            k.style.color = "#bdbdbd";
        }
    });
    boxes.forEach((a) => {
        a.style.display = "flex";
    });
});
let nav = document.querySelectorAll(".nav-bar li a");
nav.forEach((a) => {
    a.addEventListener("click",() => {
        for (let i = 0; i<nav.length; i++){
            if (nav[i] == a){
                nav[i].style.color = "#bac964";
            }
            else{
                nav[i].style.color = "rgb(203, 203, 203)";
            }
        }
        
    })
});
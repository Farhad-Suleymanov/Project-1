let boxes = document.querySelectorAll(".b1");
let all = document.querySelector(".all");
let packaging = document.querySelector(".packaging");
let mockup = document.querySelector(".mockup");
let typography = document.querySelector(".tyograhpy"); 
let photography = document.querySelector(".photography");

packaging.addEventListener("click", (e) => {
    e.preventDefault();

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

    boxes.forEach((a) => {
        a.style.display = "flex";
    });
});
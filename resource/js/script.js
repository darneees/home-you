// modal function

const modal = document.getElementById("modal");
const open = document.getElementById("open");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


function openModal() {
    modal.style.display = "flex";
    overlay.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// scroll to top

let myButton = document.getElementById("scrollTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "flex";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// menu mobile

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuMobile");
    const menuContent = document.querySelector(".menu_mobile");

    menuBtn.addEventListener("click", function () {
        menuContent.classList.toggle("active");
    });
});
// Fot Toggler Menu
const toggleMenu = document.getElementById("toggle-menu");
const ul = document.getElementById("ul");

toggleMenu.onclick = () => modifications();

function modifications() {
    ul.classList.toggle("active");
    toggleMenu.classList.toggle("active")
}

// For Menu Slider

const menuButtons = [...document.querySelectorAll(".tab-menu-round .tab-link")];
const tabs = [...document.querySelectorAll(".tabs-content .tab")];
let currentMenu = 0;

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].setAttribute("data-index", i);
}

// For Change current Menu And Applic The function

menuButtons.forEach(btn => {
    btn.onclick = () => {
        currentMenu = btn.getAttribute("data-index");
        changeSlide();
    }
})

function changeSlide() {
    removeActive();
    tabs[currentMenu].classList.add("active");
    menuButtons[currentMenu].classList.add("active")
}

function removeActive() {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
    menuButtons.forEach(btn => {
        btn.classList.remove("active");
    })
}

// for the animation in the header section

const section = document.querySelector("header");
const ctaImage = document.querySelector(".cta-full-image");
let started = false;

window.onload = () => {
    section.classList.add("animation")
};



let nav = document.querySelector(".nav-bar");
let sections = [...document.body.children].slice(2);
window.onscroll = () => {
    if (window.scrollY >= 100) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
    sections.forEach(sec => {
        if (sec === ctaImage) {
            const values = ctaImage.querySelectorAll("h1");
            if (!started) {
                values.forEach(el => startCount(el))
            }
            started = true;
        }
        let ofsst = sec.offsetTop;
        let top = window.scrollY + 100;
        let height = sec.offsetHeight;
        if (top >= ofsst && top < ofsst + height) {
            sec.classList.add("animation");
        } else {
            sec.classList.remove("animation");
        }
    })
}

function startCount(el) {
    let value = el.dataset.value;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === value) {
            clearInterval(count);
        }
    }, 2000 / value)
}

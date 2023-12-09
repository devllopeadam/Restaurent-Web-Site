
const headerSection = document.querySelector(".header-section");
window.onload = () => headerSection.classList.add("animation");


const parent = document.querySelectorAll(".faq-question-wrap");
const bars = document.querySelectorAll(".faq-question-bar");

bars.forEach(bar => {
  bar.addEventListener("click", (e) => {
    let addTheActiveClass = e.currentTarget.parentElement;
    addTheActiveClass.classList.toggle("active")
  })
})

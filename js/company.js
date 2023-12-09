
const headerSection = document.querySelector(".header-section");
window.onload = () => headerSection.classList.add("animation");

// const ctaImage = document.querySelector(".cta-full-image");
// const values = ctaImage.querySelectorAll("h1");
// let started = false;

// function startCount(el) {
//   let value = el.dataset.value;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent === value) {
//       clearInterval(count);
//     }
//   }, 1500 / value)
// }

// window.onscroll = () => {
  // if (window.scrollY >= ctaImage.offsetTop) {
  //   if (!started) {
  //     values.forEach(el => startCount(el))
  //   }
  //   started = true;
  // }
// }

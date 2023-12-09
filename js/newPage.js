// const foodCards = document.querySelectorAll(".food-card");
// let other = document.getElementById("other");

// console.log(foodCards);

// // console.log(foodCards);
// foodCards.forEach(foodCard => {
//   if (!foodCard.classList.contains("product")) {
//     foodCard.addEventListener("click", (e) => {
//       custmizePage(foodCard)
//     })
//   } else {
//     false;
//   }
// })

// function custmizePage(foodCard) {
//   let src = foodCard.querySelector("img").src;
//   let titleAndName = foodCard.querySelector("h6").textContent;
//   let priceTarget = foodCard.querySelector(".price").textContent;
//   setTimeout(() => {
//     let page = window.open("productPage.html", "_blank");
//     setTimeout(() => {
//       let productName = page.document.getElementById("productName");
//       let name = page.document.getElementById("name");
//       let price = page.document.getElementById("price");
//       let img = page.document.getElementById("img");

//       page.document.title = titleAndName;
//       productName.textContent = titleAndName;
//       name.textContent = titleAndName;
//       price.textContent = priceTarget;

//       let indxOne = src.indexOf("assets");
//       let indxTwo = src.indexOf("%");
//       srcImage = `${src.slice(indxOne, indxTwo)} ${src.slice(indxTwo + 3)}`;
//       img.src = srcImage;
//     }, 5);
//   }, 5);
// }
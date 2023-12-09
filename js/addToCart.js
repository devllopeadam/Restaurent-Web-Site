/*

-> adam db ana an3adedel dik add to cart:

1 -> njib li3anhtaj [Variables]
2 -> 

*/
// for add the all quantitys in add to cart
const numberOfOrder = [...document.querySelectorAll("#number-of-order")];
const addButton = [...document.querySelectorAll("#addItems")]
const quantity = document.getElementById("quantity");
const forms = document.querySelectorAll("form");
let ordersQuantity = 0;

// For Not load The Page
forms.forEach(form => {
  form.onsubmit = (e) => {
    e.preventDefault()
  }
})

let srcImage = "";
let priceProduct = "";
let quantityProduct = "";
let nameProduct = "";
addButton.forEach(btn => {
  btn.addEventListener("click", (e) => {
    hundelOrders(e);
  })
})

let orders = document.getElementById('orders');

// For Open And Close the pannel of add card
const cardButton = document.getElementById("openClose");
const allOrders = document.getElementById("allOrders");
const close = document.getElementById("close");
cardButton.onclick = () => allOrders.classList.add("opened");
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") allOrders.classList.remove("opened");
})
close.onclick = () => {
  allOrders.classList.remove("opened");
  quantityValue();
}

// Functions To Create Orders Seleted

function hundelOrders(e) {
  let parent = e.target.parentElement.parentElement;
  let numberOrder = +parent.querySelector("#number-of-order").value;
  let grandParent = parent.parentElement;
  // for add a items selected
  priceProduct = parent.querySelector(".price").innerHTML;
  nameProduct = parent.querySelector("h6");
  quantityProduct = numberOrder
  let indxOne = (grandParent.querySelector("img").src).indexOf("assets");
  let indxTwo = (grandParent.querySelector("img").src).indexOf("%");
  srcImage = `${(grandParent.querySelector("img").src).slice(indxOne, indxTwo)} ${(grandParent.querySelector("img").src).slice(indxTwo + 3)}`;
  ordersQuantity += numberOrder;
  // changingTheValue()
  createOrder(srcImage, nameProduct.innerHTML, priceProduct, quantityProduct);
  showTheEmpty();
  calculetTotal()
  allOrders.classList.add("opened")
  quantityValue();
  // for remove the removed items
  let removeBtns = orders.querySelectorAll('#remove');
  removeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let orderParent = e.currentTarget.parentElement.parentElement.parentElement;
      orderParent.remove();
      quantityValue();
      calculetTotal();
      showTheEmpty();
    })
  })
}

function quantityValue() {
  let inputs = [...orders.querySelectorAll("input")];
  if (inputs.length > 0) {
    let result = inputs.map(int => +int.value).reduce((a, c) => a + c);
    quantity.textContent = result;
  } else {
    quantity.textContent = 0;
  }
}

function createOrder(srcImage, NameProduct, procutPrice, quantityValue) {
  let productsName = [...orders.querySelectorAll("h3")];
  // let qu = +document.getElementById("modificationQuantity").value;
  let exist = productsName.find(product => product.innerHTML == nameProduct.innerHTML);
  if (exist) {
    let inputValue = +exist.parentElement.parentElement.parentElement.querySelector("#modificationQuantity").value;
    let inputBase = +nameProduct.parentElement.parentElement.querySelector("input").value;
    let finalResult = inputValue + inputBase;
    exist.parentElement.parentElement.parentElement.querySelector("#modificationQuantity").value = finalResult;
  } else {
    let order =
      `<div class="order">
      <div class="image">
        <img src="${srcImage}">
      </div>
      <div class="content">
        <div class="info">
          <h3 class="itemName" id="itemName">${NameProduct}</h3>
          <span class="price" id="price">${procutPrice}</span>
          <span class="remove" id="remove">Remove</span>
        </div>
        <div class="quantity-order">
          <input type="number" id="modificationQuantity" value="${quantityValue}">
        </div>
      </div>
    </div>`
    orders.innerHTML += order;
  }
}
function addToTheParent(element, parent) {
  parent.appendChild(element)
}

function calculetTotal() {
  let prices = [...orders.querySelectorAll("#price")];
  let subtotal = orders.parentElement.querySelector("#total");
  let all = 0.00;
  prices.forEach(price => {
    // for give the quantites
    let orderQuantity = price.parentElement.parentElement.parentElement.querySelector("input").value;
    // "$ 9.99 USD"
    all += +price.innerHTML.slice(1, 6) * +orderQuantity;
  })
  subtotal.innerHTML = all.toFixed(2);
}

function changingTheValue() {
  if ([...orders.children].length > 0) {
    let inputs =[... orders.querySelectorAll("input")];
    inputs.forEach(input => {
      input.onkeyup(() => {
        console.log(input.value);
      })
    })
  } else {
    false;
  }  
}


// for show the empty orders

function showTheEmpty() {
  if ([...orders.children].length <= 0) {
    allOrders.classList.add("empty");
  } else {
    allOrders.classList.remove("empty");
  }
}

let basketIconbut = document.getElementById("basketIcon");
let basketHTML = document.querySelector(".basketMenuDiv");
let itemul = document.querySelector(".item");

document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket");
  let basket = JSON.parse(basketStr);
  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  } else {
    ShowCount(basket);
    ShowTotalPrice(basket);

  }
});
basketIconbut.addEventListener("click", function () {
  // // basketHTML.classList.add("active");

  document.body.style.overflow = "hidden";

  let basket = JSON.parse(localStorage.getItem("basket"));

  itemul.innerHTML = " ";

  basket.forEach((item) => {
    let html = `
    <li class ="d-flex mb-3">
   <div class="image">
     <img src="${item.src}" alt="">
   </div>
   <div class="info">
   <span>${item.count}</span>
   x
    <h6>
    ${item.name}
    </h6>
    <span>
    ${item.price}
    </span>
    
    </div>
    <div class="xbtn">
    <b style ="color:black">
    <i class="fa-regular fa-trash-can"></i>
    </b>
    </div>
    
    </li>
    `;
    itemul.innerHTML += html;
  });

  let delbutton = document.querySelectorAll(".xbtn");
  delbutton.forEach((del) => {
    del.addEventListener("click", function () {
      let li = this.parentElement;
      let name = li.querySelector(".info  h6").innerText;
      basket = basket.filter((drone) => drone.name != name);
      li.remove();

      ShowCount(basket);
    ShowTotalPrice(basket);

      localStorage.setItem("basket", JSON.stringify(basket));
    });
  });
});

let addtocartButton = document.querySelectorAll(".hover-button-addcart");
addtocartButton.forEach((button) => {
  button.addEventListener("click", function () {
    // basketHTML.classList.toggle("active");

    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = JSON.parse(localStorage.getItem("basket"));
    }
    let product = GetProductsData(this);
    let existedProduct = basket.find((pro) => {
      return pro.id == product.id;
    });
    if (!existedProduct) {
      basket.push(product);
    } else {
      existedProduct.count++;
    }
    ShowCount(basket);
    ShowTotalPrice(basket);
    // console.log(basket);
    let basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);


  
});
  });

  

function GetProductsData(product) {
  let parent = product.parentElement.parentElement;
  let id = parent.getAttribute("data-id");
  let price = parent.querySelector(".pricess").innerText;
  let name = parent.querySelector(".product-name").innerText;
  let src = parent.querySelector("img").src;
  let result = { id, price, name, src, count: 1 };
  return result;
}
function ShowCount(basket) {
  let basketCount = document.querySelector(".basket-count");
  basketCount.innerText = basket.reduce((total, product) => {
    return (total += product.count);
  }, 0);
}

function ShowTotalPrice(basket) {
  let total = document.querySelector(".totalprice");

  total.innerText = basket.reduce((total, product) => {
    return (total += parseInt(product.price) * product.count);
  }, 0);
}


//#region Header
let drone = document.querySelector(".Drone");
let dronediv = document.querySelector(".dronediv");
let accesories = document.querySelector(".accesories");
let accesoriesdiv = document.querySelector(".accesoriesdiv");
let basket = document.querySelector("#basketIcon");
let basketMenu = document.querySelector(".basketMenuDiv");
let closeBasketButton = document.querySelector("#closebasket-button");
let hamburgerMenu = document.getElementById("hamburgermenu");
let hamburgermenuDiv = document.querySelector(".hamburgerMenuDiv");
let closeButton = document.getElementById("closebutton");
let personMenu = document.getElementById("personMenu");
let personDiv = document.querySelector(".personDiv");
let searchMenu = document.getElementById("searchMenu");
let searchDiv = document.querySelector(".searchDiv");

drone.addEventListener("mouseover", function () {
  dronediv.classList.add("active");
  accesoriesdiv.classList.remove("active");
});

drone.addEventListener("mouseout", function () {
  dronediv.classList.remove("active");
});

basket.addEventListener("click", function () {
  basketMenu.classList.add("active");
});
closeBasketButton.addEventListener("click", function (e) {
  e.stopPropagation();
  basketMenu.classList.remove("active");
  document.body.style.overflowY ="scroll";
});

accesories.addEventListener("mouseover", function () {
  accesoriesdiv.classList.add("active");
  dronediv.classList.remove("active");
});

accesories.addEventListener("mouseout", function () {
  accesoriesdiv.classList.remove("active");
});

hamburgerMenu.addEventListener("click", function () {
  hamburgermenuDiv.classList.toggle("active");
});
closeButton.addEventListener("click", function () {
  hamburgermenuDiv.classList.remove("active");
});
personMenu.addEventListener("click", function () {
  personDiv.classList.toggle("active");
});
searchMenu.addEventListener("click", function () {
  searchDiv.classList.toggle("active");
});
//#endregion

//#region Basket

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


//#endregion

//#region CUSTOMER-REVIEW SECTION START
$("#customer-review .owl-carousel").owlCarousel({
  stagePadding: 50,
  loop: false,
  dots: false,

  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    621: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
//#endregion

//#region  FAQ SECTION START
$(".accordion-header").click(function () {
  let $icon = $(this).find("i");
  $icon.toggleClass("active");
  $(this).next().slideToggle();
  $(".accordion-body").not($(this).next()).slideUp();
  $(".accordion-header i").not($icon).removeClass("active");
});
//#endregion

//#region SPONSORS SECTION START
$("#sponsors  .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
//#endregion

//#region ALL-PRODUCTS SECTION START
$("#All-Products .owl-carousel").owlCarousel({
  stagePadding: 20,
  loop: false,
  dots: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    621: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var activeCat = "";
function filterGroup(group) {
  if (activeCat != group) {
    $(".view")
      .filter("." + group)
      .show();
    $(".view")
      .filter(":not(." + group + ")")
      .hide();
    activeCat = group;
  }
}

$(".featured-button").click(function () {
  filterGroup("featured-carusel");
});
$(".bestSellers-button").click(function () {
  filterGroup("bestSellers-carusel ");
});
$(".newArrivals-button").click(function () {
  filterGroup("newArrivals-carusel ");
});
//#endregion

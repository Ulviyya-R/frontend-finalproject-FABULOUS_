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

basket.addEventListener("click",function(){
  basketMenu.classList.toggle("active");
  
})
// document.body.addEventListener("click",function(){
//   basketMenu.classList.remove("active");
// })
closeBasketButton.addEventListener("click",function(){
  basketMenu.classList.remove("active");
})

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

let drone = document.querySelector(".Drone");
let dronediv = document.querySelector(".dronediv");
let accesories = document.querySelector(".accesories");
let accesoriesdiv = document.querySelector(".accesoriesdiv");
let basketss = document.querySelectorAll(".basket-icon");
let basketMenu = document.querySelectorAll(".basketMenuDiv");
let closeBasketButton = document.querySelectorAll("#closebasket-button");
let hamburgerMenu = document.getElementById("hamburgermenu");
let hamburgermenuDiv = document.querySelector(".hamburgerMenuDiv");
let closeButton = document.getElementById("closebutton");
let personMenu = document.getElementById("personMenu");
let personDiv = document.querySelector(".personDiv");
let searchMenu = document.querySelector(".search-icon");
let searchDiv = document.querySelector(".searchDiv");

drone.addEventListener("mouseover", function () {
  dronediv.classList.add("active");
  accesoriesdiv.classList.remove("active");
});

drone.addEventListener("mouseout", function () {
  dronediv.classList.remove("active");
});

basketss.forEach((basketz) => {
  basketz.addEventListener("click", function () {
    basketMenu.forEach((menu) => {
      menu.classList.add("active");
    });
  });
});

closeBasketButton.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    basketMenu.forEach((menu) => {
      menu.classList.remove("active");
    });
    document.body.style.overflowY = "scroll";
  });
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

// window.addEventListener("scroll", function () {
//   const headerTop = this.document.querySelector(".head_container");
//   headerTop.classList.toggle("active", window.scrollY > 0);
// });

$(window).scroll(function () {
  let topHeader = $(".header-top");
  scroll = $(window).scrollTop();
  if (scroll >= 66) {
    topHeader.addClass("active");
  } else {
    topHeader.removeClass("active");
  }
});




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

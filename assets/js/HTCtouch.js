$(".responsive").slick({
  dots: false,
  infinite: true,
  variableWidth: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left left_arrow">',
  nextArrow: '<i class="fa-solid fa-chevron-right right_arrow">',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});



$(".product").on("mouseover", function () {
  $(this).find(".hover-button-addcart").addClass("active");
  $(this).find(".rightbuttons").addClass("active");
});
$(".product").on("mouseout", function () {
  $(this).find(".hover-button-addcart").removeClass("active");
  $(this).find(".rightbuttons").removeClass("active");
});
// $(document).ready(function () {
//   $(".set > a").on("click", function () {
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//       $(this).siblings(".content").slideUp(200);
//       $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
//     } else {
//       $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
//       $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
//       $(".set > a").removeClass("active");
//       $(this).addClass("active");
//       $(".content").slideUp(200);
//       $(this).siblings(".content").slideDown(200);
//     }
//   });
// });

$(document).ready(function () {
  $("#description").click(function () {
    $("#textcontent").slideToggle("slow");
    $("#formcontent").slideUp("slow");
  });
  $("#reviews").click(function () {
    $("#formcontent").slideToggle("slow");
    $("#textcontent").slideUp("slow");
  });
});



$(".2responsive").slick({
  dots: false,
  infinite: false,
  variableWidth: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left left_arrow">',
  nextArrow: '<i class="fa-solid fa-chevron-right right_arrow">',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 391,
      settings: {
        
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
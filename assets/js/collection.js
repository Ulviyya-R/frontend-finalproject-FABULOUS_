$(".drone").on("mouseover", function () {
    $(this).find(".hover-button-addcart").addClass("active");
    $(this).find(".rightbuttons").addClass("active");
  });
  $(".drone").on("mouseout", function () {
    $(this).find(".hover-button-addcart").removeClass("active");
    $(this).find(".rightbuttons").removeClass("active");
  });


  $(".grid .grid-p").click(function () {
    $(".list-page").fadeOut();
    $(".grid-page").fadeIn();
  
  });

  $(".list .list-p").click(function () {
    $(".grid-page").fadeOut();
    $(".list-page").fadeIn();
  });

  $(".collect_title").click(function () {
    let $icon = $(this).find("i");
    $icon.toggleClass("active");
    $(this).next().slideToggle();
    $(".collect_info").not($(this).next()).slideUp();
    $(".collect_title i").not($icon).removeClass("active");
  });


  
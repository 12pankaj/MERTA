$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
    $(".navbar").addClass("fixed-top");
  } else {
    $(".back-to-top").fadeOut("slow");
    $(".navbar").removeClass("fixed-top");
    $(".navbar").css("z-index", "3");
  }
});

$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

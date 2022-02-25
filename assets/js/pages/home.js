$(document).ready(function () {
  $(".slider").slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  // triggers join wait list popup - remove when app is ready
  $(".signup-btn").click((e) => {
    e.preventDefault();
    $("#popupModalCenter").modal("show");
  });
});

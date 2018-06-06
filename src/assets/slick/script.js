$(document).ready(function(){
  $('.datail__slider').slick({
    dots: false,
    prevArrow: false,
    nextArrow: ".slider__arrow",
    slide: ".slider__item",
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
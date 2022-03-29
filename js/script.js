$(document).ready(function () {
  $('.burger__button').click(function (e) {
    e.preventDefault();
    $('.burger__button').toggleClass('burger__activ')
    $('.navbar__nav').toggleClass('navbar__activ')
    $('body').toggleClass('no-scroll')
  });


});
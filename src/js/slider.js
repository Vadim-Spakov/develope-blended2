$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 850,
    easing: 'ease',
    initialSlide: 0,
    // autoplay: false,
    // autoplaySpeed: 500,
    // centerMode: true,
    // variableWidth: true,

    responsive: [
      {
        breakpoint: 768,
      },

      {
        breakpoint: 1200,
      },
    ],
  });
});

$(document).ready(function() {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    watchSlidesVisibility: true,
    loop: false,
    spaceBetween: 10,
    pagination: ".swiper-pagination",
    paginationType: "progress",
    breakpoints: {
      // when window width is <= 400px
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesOffsetAfter: 100,
      },
     
      960: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      
      1280: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      
      10000: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlide: false,
      }
    }
  });
  $(".swiper-button-next").click(function() {
    mySwiper.slideNext();
  });
  $(".swiper-button-prev").click(function() {
    mySwiper.slidePrev();
  });
});

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  const mySwiper_thumb = new Swiper(".gallery-thumbs", {
    slidesPerView: 6,
    centeredSlides: true,
    loop: true,
  });

  const mySwiper_main = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: mySwiper_thumb,
    },
  });
}); // end

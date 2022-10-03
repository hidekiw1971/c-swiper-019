jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // start
  //メインスライド
  var slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6, //スライドの枚数と同じ値を指定
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //   swiper: thumbs,
    // },
  });

  //サムネイルスライド
  var thumbs = new Swiper(".gallery-thumbs", {
    // slidesPerView: "auto",
    slidesPerView: 6,
    spaceBetween: 5,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
  // end
});

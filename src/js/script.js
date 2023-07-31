
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    $(".js-hamburger").click(function () {
        if ($('.js-hamburger').hasClass('is-active')) {
          $('.js-hamburger').removeClass("is-active");
          // $("html").toggleClass("is-fixed");
          $(".js-sp-nav").fadeOut(300);
        } else {
          $('.js-hamburger').addClass("is-active");
          // $("html").toggleClass("is-fixed");
          $(".js-sp-nav").fadeIn(300);
        }
    });


    var swiper = new Swiper(".js-works-swiper", {
        pagination: {
          el: ".js-works-pagination",
        },
        clickable:true,
        loop:true,
        autoplay:{
            delay:5000,
        },
    });
});

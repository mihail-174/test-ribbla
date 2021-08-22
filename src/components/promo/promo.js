ready(() => {

    let swiper = new Swiper(".promo__slider-inner", {
        wrapperClass: "promo__slider-content",
        slideClass: "promo__slide",
        slidesPerView: 1,
        // slidesPerGroup: 1,
        setWrapperSize: true,
        // spaceBetween: 0,
        loop: false,
        // longSwipes: false,
        // autoplay: {
        //     delay: 5000
        // },
        // navigation: {
        //     nextEl: ".promo .arrows__next",
        //     prevEl: ".promo .arrows__prev",
        //     disabledClass: "arrows__arrow_disabled",
        // },
        pagination: {
            el: ".promo__dots .dots",
            dynamicBullets: false,
        },
    });
    // $('.promo__list, .promo .arrows').on('mouseenter', function(e){
    //     b_promo_swiper.autoplay.stop();
    // });
    // $('.promo__list, .promo .arrows').on('mouseleave', function(e){
    //     b_promo_swiper.autoplay.start();
    // });

});
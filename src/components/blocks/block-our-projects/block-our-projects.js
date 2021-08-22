// eslint-disable-next-line no-undef
ready(() => {

    const block = document.querySelector(".block-our-projects");
    if (block) {
        const blockSlider = block.querySelector(".block__slider"),
            blockSliderInner = blockSlider.querySelector(".block__slider-inner"),
            blockSliderContent = blockSlider.querySelector(".block__slider-content"),
            teaser = block.querySelector(".teaser-projects"),
            teaserArr = block.querySelectorAll(".teaser-projects:not(.swiper-slide-duplicate)"),
            arrows = block.querySelector(".arrows"),
            arrowsPrev = arrows.querySelector(".arrows__prev"),
            arrowsNext = arrows.querySelector(".arrows__next"),
            blockFooter = block.querySelector(".block__footer"),
            dots = block.querySelector(".dots");

        let swiper = "";
        function paramsSlider(slidesPerView, slidesPerGroup, loop, spaceBetween) {
            var options = {
                init: false,
                wrapperClass: "block__slider-content",
                slideClass: "teaser-projects",
                slidesPerView: slidesPerView,
                slidesPerGroup: slidesPerGroup,
                setWrapperSize: true,
                grabCursor: true,
                spaceBetween: spaceBetween,
                watchOverflow: true,
                updateOnWindowResize: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                loop: loop,
                loopFillGroupWithBlank: true,
                freeMode: false,
                freeModeMomentum: false,
                navigation: {
                    nextEl: arrows.querySelector(".arrows__next"),
                    prevEl: arrows.querySelector(".arrows__prev"),
                    disabledClass: "arrows__arrow_disabled",
                },
                pagination: {
                    el: dots,
                    dynamicBullets: true,
                    clickable: true,
                }
            };

            swiper = new Swiper(blockSliderInner, options);
            swiper.init();
        }

        // 1200 - ...
        if ( document.body.offsetWidth >= 1200 ) {
            if ( teaserArr.length > 3 ) {
                if ( !blockSliderInner.classList.contains(".swiper-container-initialized") ) {
                    paramsSlider(
                        slidesPerView = 3,
                        slidesPerGroup = 3,
                        loop = true,
                        spaceBetween = 30,
                    );
                    // arrows ? arrows.style.opacity = "1" : null;
                    // arrows ? arrows.style.visibility = "visible" : null;
                    dots ? dots.style.display = "block" : null;
                }
            } else {
                arrows ? arrows.style.opacity = "0" : null;
                arrows ? arrows.style.visibility = "hidden" : null;
                dots ? dots.style.display = "none" : null;
            }
        }

        // 992 - 1199
        if ( document.body.offsetWidth >= 992 && document.body.offsetWidth <= 1199 ) {
            if ( teaserArr.length > 2 ) {
                if ( !blockSliderInner.classList.contains(".swiper-container-initialized") ) {
                    paramsSlider(
                        slidesPerView = 3,
                        slidesPerGroup = 3,
                        loop = true,
                        spaceBetween = 30,
                    );
                }
                // arrows ? arrows.style.opacity = "1" : null;
                // arrows ? arrows.style.visibility = "visible" : null;
                dots ? dots.style.display = "block" : null;
            } else {
                arrows ? arrows.style.opacity = "0" : null;
                arrows ? arrows.style.visibility = "hidden" : null;
                dots ? dots.style.display = "none" : null;
            }
        }

        // 768 - 991
        if ( document.body.offsetWidth >= 768 && document.body.offsetWidth <= 991 ) {
            if ( teaserArr.length > 3 ) {
                if ( !blockSliderInner.classList.contains(".swiper-container-initialized") ) {
                    paramsSlider(
                        slidesPerView = 3,
                        slidesPerGroup = 3,
                        loop = true,
                        spaceBetween = 30,
                    );
                }
                // arrows ? arrows.style.opacity = "1" : null;
                // arrows ? arrows.style.visibility = "visible" : null;
                dots ? dots.style.display = "block" : null;
            } else {
                arrows ? arrows.style.opacity = "0" : null;
                arrows ? arrows.style.visibility = "hidden" : null;
                dots ? dots.style.display = "none" : null;
            }
        }

        // 480 - 767
        if ( document.body.offsetWidth >= 480 && document.body.offsetWidth <= 767 ) {
            if ( teaserArr.length > 2 ) {
                if ( !blockSliderInner.classList.contains(".swiper-container-initialized") ) {
                    paramsSlider(
                        slidesPerView = 2,
                        slidesPerGroup = 2,
                        loop = true,
                        spaceBetween = 30,
                    );
                }
                // arrows ? arrows.style.opacity = "1" : null;
                // arrows ? arrows.style.visibility = "visible" : null;
                dots ? dots.style.display = "block" : null;
            } else {
                arrows ? arrows.style.opacity = "0" : null;
                arrows ? arrows.style.visibility = "hidden" : null;
                dots ? dots.style.display = "none" : null;
            }
        }

        // ... - 479
        if ( document.body.offsetWidth <= 479 ) {
            if ( teaserArr.length > 1 ) {
                if ( !blockSliderInner.classList.contains(".swiper-container-initialized") ) {
                    paramsSlider(
                        slidesPerView = 1,
                        slidesPerGroup = 1,
                        loop = true,
                        spaceBetween = 30,
                    );
                }
                // arrows ? arrows.style.opacity = "1" : null;
                // arrows ? arrows.style.visibility = "visible" : null;
                dots ? dots.style.display = "block" : null;
            } else {
                arrows ? arrows.style.opacity = "0" : null;
                arrows ? arrows.style.visibility = "hidden" : null;
                dots ? dots.style.display = "none" : null;
            }
        }
    }
});

ready(function(){var e=document.querySelector(".block-our-projects");if(e){function i(e,i,s,t){var o={init:!1,wrapperClass:"block__slider-content",slideClass:"teaser-projects",slidesPerView:e,slidesPerGroup:i,setWrapperSize:!0,grabCursor:!0,spaceBetween:t,watchOverflow:!0,updateOnWindowResize:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,loop:s,loopFillGroupWithBlank:!0,freeMode:!1,freeModeMomentum:!1,navigation:{nextEl:r.querySelector(".arrows__next"),prevEl:r.querySelector(".arrows__prev"),disabledClass:"arrows__arrow_disabled"},pagination:{el:n,dynamicBullets:!0,clickable:!0}};new Swiper(l,o).init()}var s=e.querySelector(".block__slider"),l=s.querySelector(".block__slider-inner"),t=(s.querySelector(".block__slider-content"),e.querySelector(".teaser-projects"),e.querySelectorAll(".teaser-projects:not(.swiper-slide-duplicate)")),r=e.querySelector(".arrows"),n=(r.querySelector(".arrows__prev"),r.querySelector(".arrows__next"),e.querySelector(".block__footer"),e.querySelector(".dots"));1200<=document.body.offsetWidth&&(3<t.length?l.classList.contains(".swiper-container-initialized")||(i(slidesPerView=3,slidesPerGroup=3,loop=!0,spaceBetween=30),n&&(n.style.display="block")):(r&&(r.style.opacity="0"),r&&(r.style.visibility="hidden"),n&&(n.style.display="none"))),992<=document.body.offsetWidth&&document.body.offsetWidth<=1199&&(2<t.length?(l.classList.contains(".swiper-container-initialized")||i(slidesPerView=3,slidesPerGroup=3,loop=!0,spaceBetween=30),n&&(n.style.display="block")):(r&&(r.style.opacity="0"),r&&(r.style.visibility="hidden"),n&&(n.style.display="none"))),768<=document.body.offsetWidth&&document.body.offsetWidth<=991&&(3<t.length?(l.classList.contains(".swiper-container-initialized")||i(slidesPerView=3,slidesPerGroup=3,loop=!0,spaceBetween=30),n&&(n.style.display="block")):(r&&(r.style.opacity="0"),r&&(r.style.visibility="hidden"),n&&(n.style.display="none"))),480<=document.body.offsetWidth&&document.body.offsetWidth<=767&&(2<t.length?(l.classList.contains(".swiper-container-initialized")||i(slidesPerView=2,slidesPerGroup=2,loop=!0,spaceBetween=30),n&&(n.style.display="block")):(r&&(r.style.opacity="0"),r&&(r.style.visibility="hidden"),n&&(n.style.display="none"))),document.body.offsetWidth<=479&&(1<t.length?(l.classList.contains(".swiper-container-initialized")||i(slidesPerView=1,slidesPerGroup=1,loop=!0,spaceBetween=30),n&&(n.style.display="block")):(r&&(r.style.opacity="0"),r&&(r.style.visibility="hidden"),n&&(n.style.display="none")))}});
//# sourceMappingURL=maps/block-our-projects.js.map

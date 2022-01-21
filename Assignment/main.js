import { windowEvent, handleSearchClick, handleMenuShow } from './assets/js/handleEvent.js'

function start() {
    windowEvent();
    handleHeroSlide();
    handleSearchClick();
    handleMenuShow();

}

start();

function handleHeroSlide() {
    var swiper = new Swiper(".hero-slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 300,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
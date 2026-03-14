AOS.init({
    duration: 1000,
    once: true,
});

const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 700,
    effect: 'fade',
    pagination: {
        el: '.hero-swiper-pagination',
        clickable: true,
    },
});

document
    .querySelector('.hero-swiper-zone-prev')
    .addEventListener('click', () => heroSwiper.slidePrev());
document
    .querySelector('.hero-swiper-zone-next')
    .addEventListener('click', () => heroSwiper.slideNext());

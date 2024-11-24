// start swiper 
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        speed: 1500,
        spaceBetween: 100,
        allowTouchMove: true,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
  // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
    });
});

// end swiper
// start carousel
var myCarousel = document.querySelector('#carouselExampleAutoplaying');
var carouselInstance = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // 3 seconds
    ride: 'carousel'
});
// end carousel



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 2000,
    spaceBetween: 100,
    allowTouchMove: true,
    autoplay: {
        delay: 3000,
    },
});

var myCarousel = document.querySelector('#carouselExampleAutoplaying');
var carouselInstance = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // 3 seconds
    ride: 'carousel'
});



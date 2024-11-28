const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
setInterval(() => {
    counter = (counter + 1) % images.length;
    carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
}, 3000);
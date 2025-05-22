document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.subsection');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    // Check if elements exist
    if (!carousel || slides.length === 0 || !nextBtn || !prevBtn) {
        console.error('Carousel elements not found!');
        return;
    }

    let index = 0;

    function showSlide(i) {
        index = (i + slides.length) % slides.length; // Loop around
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => showSlide(index + 1));
    prevBtn.addEventListener('click', () => showSlide(index - 1));

    // Initialize first slide
    showSlide(0);
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

const scrollBtn = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Remove or comment out the Typed.js initialization
/*
new Typed('.dynamic-txts', {
    strings: ['Designer', 'Developer', 'Student', 'Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});
*/

// Image slider functionality for project images
function initProjectImageSliders() {
    document.querySelectorAll('.project-images').forEach(slider => {
        const images = slider.querySelectorAll('.project-img');
        const dots = slider.querySelectorAll('.img-dot');
        let currentIndex = 0;

        // Function to show specific image
        function showImage(index) {
            images.forEach(img => img.style.opacity = '0');
            dots.forEach(dot => dot.classList.remove('active'));
            images[index].style.opacity = '1';
            dots[index].classList.add('active');
            currentIndex = index;
        }

        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showImage(index));
        });

        // Auto-advance slides every 4 seconds
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }, 4000);
    });
}

// Initialize image sliders when document is loaded
document.addEventListener('DOMContentLoaded', initProjectImageSliders);

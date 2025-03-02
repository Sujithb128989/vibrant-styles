// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('loaded');
    setTimeout(() => preloader.remove(), 500);
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
        }
    });
});

// Hero Typewriter (only for index.html)
if (document.querySelector('.hero p')) {
    const text = "Hair knows no gender";
    const heroP = document.querySelector('.hero p');
    let i = 0;
    function type() {
        if (i < text.length) {
            heroP.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    heroP.textContent = '';
    setTimeout(type, 1000);
}

// Service Dropdowns (only for index.html)
if (document.querySelector('.service-item')) {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            serviceItems.forEach(otherItem => {
                if (otherItem !== this) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    document.addEventListener('click', function(e) {
        serviceItems.forEach(item => {
            if (!item.contains(e.target)) {
                item.classList.remove('active');
            }
        });
    });
}

// Form Confirmation (only for form.html)
if (document.querySelector('.form-section form')) {
    document.querySelector('.form-section form').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        form.style.display = 'none';
        const confirmation = document.createElement('div');
        confirmation.classList.add('confirmation');
        confirmation.textContent = 'Thanks for booking! We’ll confirm your appointment soon.';
        form.parentElement.appendChild(confirmation);
    });
}

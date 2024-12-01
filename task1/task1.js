const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('#navToggle');
const navMenu = document.querySelector('#navMenu');
const closeBtn = document.querySelector('#closeBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});
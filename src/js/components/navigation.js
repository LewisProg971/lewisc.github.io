const navigationToggle = () => {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
};

document.addEventListener('DOMContentLoaded', () => {
    navigationToggle();
});
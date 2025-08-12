const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('#mobile-nav');

hamburgerButton.addEventListener('click', () => {
    mobileNav.classList.toggle('main-nav--active');
    hamburgerButton.classList.toggle('hamburger-menu--active');
    document.body.classList.toggle('no-scroll');
});

mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('main-nav--active');
        hamburgerButton.classList.remove('hamburger-menu--active');
        document.body.classList.remove('no-scroll');
    });
});
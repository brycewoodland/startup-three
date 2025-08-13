// Copyright Date
const currentYear = new Date().getFullYear();
const dateClass = document.querySelector('.date');
dateClass.textContent = currentYear;

// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('a');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  mainNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
    mainNav.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Pricing Menu
const tabs = document.querySelectorAll('.pricing-menu p');
const cards = document.querySelectorAll('.price-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedPlan = tab.dataset.plan;

      tabs.forEach(t => t.classList.remove('active'));
      cards.forEach(card => card.classList.remove('active'));

      tab.classList.add('active');
      const selectedCard = document.querySelector(`.price-card[data-plan="${selectedPlan}"]`);
      if (selectedCard) selectedCard.classList.add('active');
    });
});
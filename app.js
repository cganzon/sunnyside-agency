let navBurger = document.querySelector('.burger');
let popUpNav = document.querySelector('.nav-links');
let popUpAccent = document.querySelector('.popup-accent');

navBurger.addEventListener('click', () => {
    popUpNav.classList.toggle('nav-active');
    popUpAccent.classList.toggle('nav-active');
})
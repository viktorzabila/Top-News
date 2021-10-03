const burger = document.querySelector('#bar');
const toggleButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__nav');
const aboutBurger = document.querySelector('.about__oval');
const tableDropdown = document.querySelector('.about-table');
const burgerContent = document.querySelector('.about-table__burger');
const aboutNav = document.querySelector('.about__nav');
const aboutContent = document.querySelector('.about-table__menu');

burger.onclick = function()  {
    if (this.innerHTML == 'Menu') this.innerHTML = 'Close';
    else this.innerHTML = 'Menu';
}

toggleButton.onclick = function() {
    headerNav.classList.toggle('active');
}

tableDropdown.onclick = function() {
    burgerContent.classList.toggle('about-table__burger_active');
    aboutNav.classList.toggle('active');
    aboutContent.classList.toggle('active');
}

const expandText = (span, text) => {
    document.querySelector(span).classList.toggle('active');
    document.querySelector(text).classList.toggle('expand');
}

const dropdown = (list, arrow) => {
    document.querySelector(arrow).classList.toggle('active');
    document.querySelector(list).classList.toggle('show');
}

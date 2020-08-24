import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';

console.log('###: index.js loaded');

function overlayOn() {
  document.querySelector('.overlay').style.display = 'block';
}

function overlayOff() {
  document.querySelector('.overlay').style.display = 'none';
}

function hamburger() {
  const nav = document.querySelector('.header__nav');
  if (nav.className === 'header__nav') {
    overlayOn();
    // nav.className += ' header__bg';
    nav.className += ' header__menu';
    document.body.style.overflow = 'hidden';
  } else {
    overlayOff();
    nav.className = 'header__nav';
    document.body.style.overflow = 'auto';
  }
}

// Hamburger menu on small screen (light bg on light page)
document.querySelector('.header__icon').addEventListener('mousedown', () => {
  hamburger();
  const header = document.querySelector('.header');
  const headerMenu = document.querySelector('.header__menu');
  if (header.classList.contains('header_dark')) {
    if (headerMenu) {
      headerMenu.style.backgroundColor = '#F5F6F7';
    }
  }
});

// open pop on authorization
document.querySelector('.authorization').addEventListener('mousedown', () => {
  document.querySelector('.popup').classList.add('popup_active');
  document.body.style.overflow = 'hidden';
});
// close pop on X
document.querySelector('.popup__close').addEventListener('mousedown', () => {
  document.querySelector('.popup').classList.remove('popup_active');
  document.body.style.overflow = 'auto';
});

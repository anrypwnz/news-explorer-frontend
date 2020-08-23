import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';

console.log('###: index.js loaded');

function on() {
  document.querySelector('.overlay').style.display = 'block';
}

function off() {
  document.querySelector('.overlay').style.display = 'none';
}

function hamburger() {
  const nav = document.querySelector('.header__nav');
  console.log({ nav });
  if (nav.className === 'header__nav') {
    on();
    // nav.className += ' header__bg';
    nav.className += ' header__menu';
    document.body.style.overflow = 'hidden';
  } else {
    off();
    nav.className = 'header__nav';
    document.body.style.overflow = 'auto';
  }
}

document.querySelector('.header__icon').addEventListener('mousedown', () => {
  hamburger();
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

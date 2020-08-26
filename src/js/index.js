import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';
import * as c from './constants';

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
c.authorizationBtn.addEventListener('mousedown', () => {
  c.popup.open();
});

// close pop on X
document.querySelector('.popup__close').addEventListener('mousedown', () => {
  c.popup.close();
});

// submit registration listener
c.form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = {
    email: c.form[0].value,
    password: c.form[1].value,
    name: c.form[2].value,
  };
  console.log(data);
});

// disable submit when inputs are invalid
c.form.addEventListener('input', () => {
  if (c.form[0].validity.valid && c.form[1].validity.valid && c.form[2].validity.valid) {
    c.form[3].removeAttribute('disabled');
  } else {
    c.form[3].setAttribute('disabled', 'true');
  }
});

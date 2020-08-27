import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';
// import * as c from './constants';
import Popup from './components/Popup';
import Form from './components/Form';

console.log('###: index.js loaded');
const headerIcon = document.querySelector('.header__icon');
const authorizationBtn = document.querySelector('.authorization');

const popup = new Popup(document.querySelector('.popup'));

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
headerIcon.addEventListener('mousedown', () => {
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
authorizationBtn.addEventListener('mousedown', () => {
  popup.setContent('authorization');
  popup.open();
  // new Form(document.forms.main);
});

// const formMain = new Form(document.forms.main)
// const formLogin = new Form(document.forms.login)

// const formMain = document.forms.main;

// submit registration listener
// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const data = {
//     email: form[0].value,
//     password: form[1].value,
//     name: form[2].value,
//   };
//   console.log(data);
// });

// disable submit when inputs are invalid
// form.addEventListener('input', () => {
//   if (form[0].validity.valid && form[1].validity.valid && form[2].validity.valid) {
//     form[3].removeAttribute('disabled');
//   } else {
//     form[3].setAttribute('disabled', 'true');
//   }
// });

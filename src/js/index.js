import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';
// import * as c from './constants';
import Popup from './components/Popup';
import NewsApi from './api/NewsApi';
import MainApi from './api/MainApi';

const newsApi = new NewsApi();
const mainApi = new MainApi();
// test
document.querySelector('.results__button').addEventListener('mousedown', () => {
  console.log('get articles');
  mainApi.getArticles();
});

console.log('###: index.js loaded');

// searching news...
const searchForm = document.forms.search;
searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const keyword = searchForm[0].value;
  newsApi.getNews(keyword);
  console.log({ keyword });
});

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
const headerIcon = document.querySelector('.header__icon');
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
const authorizationBtn = document.querySelector('.authorization');
authorizationBtn.addEventListener('mousedown', () => {
  popup.setContent('authorization');
  popup.open();
});

// TODO fix search input (bottom line)

import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';
import { NEWS_API, HEADER, MAIN_API, POPUP } from './constants';

import Popup from './components/Popup';
import Form from './components/Form';
import NewsApi from './api/NewsApi';
import MainApi from './api/MainApi';
import BaseComponent from './components/BaseComponent';
import Header from './components/Header';

console.log('###: index.js loaded');

const newsApi = new NewsApi(NEWS_API);
const mainApi = new MainApi(MAIN_API);
const header = new Header(HEADER);
const form = new Form(document.querySelector('form'), mainApi);
const popup = new Popup(POPUP, mainApi);

// test
document.querySelector('.results__button').addEventListener('mousedown', () => {
  mainApi.getArticles();
});

// searching news...
const searchForm = document.forms.search;
searchForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const keyword = searchForm[0].value;
  await newsApi.getNews(keyword);
  console.log({ keyword });
  console.log(newsApi.articles);
});

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
  popup.setContent('auth');
});

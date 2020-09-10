const NEWS_API = {
  apiKey: 'b665e938d3cc41038f1329dbe7bd4a74',
  proxy: 'https://nomoreparties.co/news/v2/',
};

const HEADER = {
  authorizationBtn: document.querySelector('.authorization'),
  userName: document.querySelector('.nav__item-name'),
  userBlockName: document.querySelector('.nav__block-name'),
  savedBtn: document.querySelector('.nav__item-saved'),
  headerIcon: document.querySelector('.header__icon'),
  overlay: document.querySelector('.overlay'),
};

const POPUP = {
  popupWindow: document.querySelector('.popup'),
  closeElem: document.querySelector('.popup__close'),
  authorization: document.querySelector('.popup__authorization'),
  login: document.querySelector('.popup__login'),
  loginLink: document.querySelector('.popup__helper_link'),
};

const MAIN_API = 'https://top-news.ml/';

const SEARCH_FORM = document.forms.search;
const RESULTS = {
  status: document.querySelector('.result__status_search'),
  noResult: document.querySelector('.result__status_no-results'),
  resultsTitle: document.querySelector('.results__title'),
  showMoreBtn: document.querySelector('.results__button'),
};

export {
  NEWS_API, HEADER, MAIN_API, POPUP, SEARCH_FORM, RESULTS,
};

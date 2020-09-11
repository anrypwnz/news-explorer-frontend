import '../css/index.css';
import '../images/avatar.png';
import '../images/favicon.svg';
import '../images/image_07.png';
import {
  NEWS_API, HEADER, MAIN_API, POPUP, SEARCH_FORM, RESULTS,
} from './constants';

import Popup from './components/Popup';
// import Form from './components/Form';
import NewsCardList from './components/NewCardList';
import NewsApi from './api/NewsApi';
import MainApi from './api/MainApi';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Authorization from './utils/Authorization';
import SavedArticles from './components/SavedArticles';

console.log('###: index.js loaded');

const newsApi = new NewsApi(NEWS_API);
const mainApi = new MainApi(MAIN_API);
const popup = new Popup(POPUP, mainApi);
const newsCard = new NewsCard(mainApi);
const auth = new Authorization();
const header = new Header(popup, HEADER);

const saved = new SavedArticles(mainApi, newsCard);
saved.showSavedCards();

// eslint-disable-next-line no-new
new NewsCardList(SEARCH_FORM, RESULTS, newsApi, newsCard);

// auth
if (auth.isLoggedIn()) {
  header.login(localStorage.name);
} else {
  header.unathorized();
}

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export default class NewsCardList {
  constructor(searchForm, results, newsApi, newsCard) {
    const {
      status, noResult, resultsTitle, showMoreBtn,
    } = results;
    this.status = status;
    this.noResult = noResult;
    this.resultsTitle = resultsTitle;
    this.searchForm = searchForm;
    this.newsApi = newsApi;
    this.newsCard = newsCard;
    this.showMoreBtn = showMoreBtn;

    this.container = document.querySelector('.results');
    this.addListeners();
  }

  addListeners() {
    if (this.searchForm) {
      this.searchForm.addEventListener('submit', async (evt) => {
        evt.preventDefault();
        this.renderError('hide');
        const keyword = this.searchForm[0].value;
        this.renderLoader('show');
        await this.newsApi.getNews(keyword);
        this.renderLoader('hide');
        this.searchForm[0].value = '';
        if (this.newsApi.articles.length === 0) {
          this.renderResultsTitle('hide');
          this.renderError('show');
          return;
        }
        this.renderResultsTitle('show');
        this.showMore('show');
        const cards = this.newsApi.articles;
        console.log({ keyword });
        console.log(cards);
        for (const i in cards) {
          this.newsCard.createCard(cards[i], keyword);
        }
      });
    }
  }

  renderResultsTitle(mode) {
    if (mode === 'show') {
      this.resultsTitle.style.display = 'block';
    } if (mode === 'hide') {
      this.resultsTitle.style.display = 'none';
    }
  }

  renderLoader(mode) {
    if (mode === 'show') {
      this.status.style.display = 'flex';
    } if (mode === 'hide') {
      this.status.style.display = 'none';
    }
  }

  renderError(mode) {
    if (mode === 'show') {
      this.noResult.style.display = 'flex';
    } if (mode === 'hide') {
      this.noResult.style.display = 'none';
    }
  }

  showMore(mode) {
    if (mode === 'show') {
      this.showMoreBtn.style.display = 'block';
    } if (mode === 'hide') {
      this.showMoreBtn.style.display = 'none';
    }
  }

  // showMoreResults() {

  // }

  // addCard() {

  // }
}

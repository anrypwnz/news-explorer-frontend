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
    this._addListeners();
  }

  _addListeners() {
    let cards;
    let keyword;
    let n = 0;
    if (this.searchForm) {
      this.searchForm.addEventListener('submit', async (evt) => {
        evt.preventDefault();
        this.newsCard._clearCardField();
        this.renderResultsTitle('hide');
        this.renderError('hide');
        keyword = this.searchForm[0].value;
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
        cards = this.newsApi.articles;
        if (cards.length <= 3) {
          for (let i = 0; i < cards.length; i += 1) {
            this.showMore('hide');
            this.newsCard.createCard(cards[i], keyword);
          }
        } else {
          do {
            this.newsCard.createCard(cards[n], keyword);
            n += 1;
          } while (n < 3);
        }
      });
    }

    if (this.showMoreBtn) {
      this.showMoreBtn.addEventListener('mousedown', () => {
        this.newsCard.createCard(cards[n], keyword);
        if (cards[n + 1]) {
          this.newsCard.createCard(cards[n + 1], keyword);
        }
        if (cards[n + 2]) {
          this.newsCard.createCard(cards[n + 2], keyword);
        }
        n += 3;
        if (cards.length - n < 1) {
          this.showMore('hide');
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
}

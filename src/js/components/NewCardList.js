export default class NewsCardList {
  constructor(searchForm, results, newsApi, newsCard) {
    const { status, noResult, resultsTitle } = results;
    this.status = status;
    this.noResult = noResult;
    this.resultsTitle = resultsTitle;
    this.searchForm = searchForm;
    this.newsApi = newsApi;
    this.newsCard = newsCard;

    this.container = document.querySelector('.results');
    this.addListeners();
  }

  addListeners() {
    this.searchForm.addEventListener('submit', async (evt) => {
      evt.preventDefault();
      this.renderError('hide');
      const keyword = this.searchForm[0].value;
      await this.renderLoader('show');
      await this.newsApi.getNews(keyword);
      await this.renderLoader('hide');
      if (this.newsApi.articles.length === 0) {
        this.renderResultsTitle('hide');
        this.renderError('show');
        return;
      }
      this.renderResultsTitle('show');
      console.log({ keyword });
      const cards = this.newsApi.articles;
      console.log(cards);

      for (const i in cards) {
        this.newsCard.createCard(cards[i], keyword);
      }
      this.newsCard.createCard(this.newsApi.articles[0], this.keyword);
    });
  }

  renderResultsTitle(mode) {
    if (mode === 'show') {
      console.log(this.status);
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

  showMore() {

  }

  addCard() {

  }
}

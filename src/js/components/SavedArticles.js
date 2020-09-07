export default class SavedArticles {
  constructor(api, newsCard) {
    this.api = api;
    this.newsCard = newsCard;
  }

  savedResults() {
    if (document.querySelector('.results__saved')) {
      this.api.getArticles()
        .then((res) => {
          console.log(res.data);
          for (const i in res.data) {
            console.log(res.data[i]);
            this.newsCard.createCard(res.data[i], res.data[i].keyword);
          }
        });
    }
  }
}

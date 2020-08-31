export default class NewsApi {
  constructor() {
    this.articles = {};
    this.today = new Date();
    this.apiKey = 'b665e938d3cc41038f1329dbe7bd4a74';
  }

  getNews(keyword) {
    return fetch(`http://newsapi.org/v2/everything?q=${keyword}&from=${this._getLastWeek()}&apiKey=${this.apiKey}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.articles = res.articles;
      })
      .catch((e) => console.log(e));
  }

  _getLastWeek() {
    let dd = this.today.getDate() - 7;
    if (dd <= 0) {
      dd = 31 + dd;
    }
    let mm = this.today.getMonth() + 1;
    const yyyy = this.today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    const lastWeek = `${yyyy}-${mm}-${dd}`;
    return lastWeek;
  }
}

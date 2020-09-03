export default class NewsApi {
  constructor(params) {
    const { apiKey, proxy } = params;
    this.articles = {};
    this.today = new Date();
    this.apiKey = apiKey;
    this.proxy = proxy;
  }

  getNews(keyword) {
    return fetch(`${this.proxy}everything?q=${keyword}&from=${this._getLastWeek()}&apiKey=${this.apiKey}`, {
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

    let mm = this.today.getMonth() + 1;
    const yyyy = this.today.getFullYear();
    if (dd <= 0) {
      dd = 31 + dd;
      mm -= 1;
    }
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

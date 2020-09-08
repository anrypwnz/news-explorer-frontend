/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export default class SavedArticles {
  constructor(api, newsCard) {
    this.api = api;
    this.newsCard = newsCard;
    this.title = document.querySelector('.saved-container__title');
    this.keywordTitle = document.querySelector('.saved-container__keywords');
  }

  showSavedCards() {
    if (document.querySelector('.results__saved')) {
      this.api.getArticles()
        .then((res) => {
          const obj = res.data;
          const keywords = [];
          for (const i in obj) {
            keywords.push(obj[i].keyword);

            obj[i].urlToImage = obj[i].image;
            delete obj[i].image;

            obj[i].description = obj[i].text;
            delete obj[i].text;

            obj[i].publishedAt = obj[i].date;
            delete obj[i].date;

            obj[i].url = obj[i].link;
            delete obj[i].link;

            this.newsCard.createCard(obj[i], obj[i].keyword);
          }
          const topKeywords = this._sortKeywords(keywords);
          this._showTitle(obj.length, topKeywords);
        })
        .catch((e) => console.log(e));
    }
  }

  _sortKeywords(array) {
    const counts = {};
    array.forEach((i) => {
      counts[i] = (counts[i] || 0) + 1;
    });
    const keysSorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    return keysSorted;
  }

  _showTitle(length, topKeywords) {
    let saved;
    // eslint-disable-next-line no-constant-condition
    if (length % 10 === 2 || 3 || 4) {
      saved = ' сохраненные статьи';
    } if (length % 10 === 1) {
      saved = ' сохраненная статья';
    } else {
      saved = ' сохранённых статей';
    }
    this.title.textContent = `${document.querySelector('.nav__item-name').textContent}
    , у вас ${length} ${saved}`;

    this.keywordTitle.insertAdjacentHTML('afterbegin', ` По ключевым словам: <b>${topKeywords[0]}, ${topKeywords[1]}</b> и <b>${topKeywords.length - 2} другим</b>`);
  }
}

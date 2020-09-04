/* eslint-disable class-methods-use-this */
export default class NewsCard {
  createCard(card, keyword) {
    const {
      author, content, description, publishedAt, source, title, url, urlToImage,
    } = card;
    this.author = author;
    this.content = content;
    this.description = description;
    this.publishedAt = this._switchDate(publishedAt);
    this.source = source;
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage || 'https://images.unsplash.com/photo-1579158949974-bfa5b5f171e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80';
    this.keyword = keyword;
    const template = document.createElement('article');
    template.classList.add('card');
    template.insertAdjacentHTML('afterbegin', `
    <div class="card__bg">
    <img src="${this.urlToImage}" alt="card-image" class="card__image">
    <div class="card__keyword-container">
      <button class="card__keyword">${this.keyword}</button>
    </div>
    <button class="card__icon">
      <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
          stroke="#B6BCBF" stroke-width="2" />
      </svg>
    </button>
  </div>
  <div class="card__info">
    <div class="card__date">${this.publishedAt}</div>
    <h3 class="card__title">${this.title}</h3>
    <p class="card__text">${this.description}</p>
    <p class="card__source">${this.source.name}</p>
  </div>
    `);
    document.querySelector('.results__container').appendChild(template);
  }

  renderCard() {

  }

  renderIcon() {
  }

  _switchDate(time) {
    const newTime = time.split('T')[0].split('-');
    let month;
    if (newTime[1] === '01') {
      month = 'Января';
    }
    if (newTime[1] === '02') {
      month = 'Февраля';
    }
    if (newTime[1] === '03') {
      month = 'Марта';
    }
    if (newTime[1] === '04') {
      month = 'Апреля';
    }
    if (newTime[1] === '05') {
      month = 'Мая';
    }
    if (newTime[1] === '06') {
      month = 'Июня';
    }
    if (newTime[1] === '07') {
      month = 'Июля';
    }
    if (newTime[1] === '08') {
      month = 'Августа';
    }
    if (newTime[1] === '09') {
      month = 'Сентября';
    }
    if (newTime[1] === '10') {
      month = 'Октября';
    }
    if (newTime[1] === '11') {
      month = 'Ноября';
    }
    if (newTime[1] === '12') {
      month = 'Декабря';
    }
    const correctDate = `${newTime[2]} ${month}, ${newTime[0]}`;
    return correctDate;
  }
}

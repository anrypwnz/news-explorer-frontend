/* eslint-disable class-methods-use-this */
export default class NewsCard {
  constructor(api) {
    this.api = api;
  }

  createCard(card, keyword, id) {
    const {
      author, description, publishedAt, source, title, url, urlToImage,
    } = card;
    this.author = author;
    this.description = description;
    this.date = this._switchDate(publishedAt);
    this.publishedAt = publishedAt;
    this.source = source;
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
    this.keyword = keyword;
    this.id = id;

    this.template = document.createElement('article');
    this.template.classList.add('card');
    this.template.insertAdjacentHTML('afterbegin', `
    <div class="card__bg">
    <a class="card__url" href="${this.url}" target="_blanc">
      <img src="${this.urlToImage}" alt="card-image" class="card__image">
    </a>
    <div class="card__keyword-container">
      <button class="card__keyword">${this.keyword}</button>
    </div>
    <div class="card__keyword-container card__warning">
      <p class="card__warning-text">Войдите, чтобы сохранять статьи</p>
    </div>
    <button class="card__icon card__icon_mark">
      <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
          stroke="#B6BCBF" stroke-width="2" />
      </svg>
    </button>
    <button class="card__icon card__icon_delete">
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z" fill="#B6BCBF"/>
    </svg>
  </button>
  </div>
  <div class="card__info">
    <div class="card__date" data-time="${this.publishedAt}">${this.date}</div>
    <a class="card__url link" href="${this.url}" target="_blanc">
      <h3 class="card__title">${this.title}</h3>
    </a>
    <p class="card__text">${this.description}</p>
    <p class="card__source">${this.source.name || this.source}</p>
  </div>
    `);
    document.querySelector('.results__container').appendChild(this.template);
    this.template.addEventListener('click', (e) => {
      if (e.target.classList.contains('card__icon') || e.target.tagName === 'svg' || e.target.tagName === 'path') {
        return false;
      }
      return window.open(this.url, '_blanc');
    });
    if (id) {
      this.template.setAttribute('data-id', this.id);
      this.template.querySelector('.card__keyword-container').style.display = 'flex';
      this.template.querySelector('.card__icon_mark').style.display = 'none';
      this.template.querySelector('.card__icon_delete').style.display = 'flex';

      this.template.querySelector('.card__icon_delete').addEventListener('click', (evt) => {
        const article = evt.target.closest('.card');
        this.api.removeArticle(article.dataset.id)
          .then(() => article.remove())
          .catch((e) => console.log(e));
      });
    }

    this.template.querySelector('.card__icon_mark').addEventListener('mousedown', (evt) => {
      this.addCard(evt);
    });
    if (!localStorage.token) {
      this.showWarning();
    }
  }

  addCard(evt) {
    const card = evt.target.closest('.card');
    if (evt.target.closest('.card__icon').classList.contains('card__marked')) {
      this.api.removeArticle(card.dataset.id)
        .then(() => {
          evt.target.closest('.card__icon').classList.remove('card__marked');
        })
        .catch((e) => console.log(e));
    } else {
      const article = {};
      article.keyword = card.querySelector('.card__keyword').textContent;
      article.source = card.querySelector('.card__source').textContent;
      article.title = card.querySelector('.card__title').textContent;
      article.text = card.querySelector('.card__text').textContent;
      article.date = card.querySelector('.card__date').dataset.time;
      article.image = card.querySelector('.card__image').src;
      article.link = card.querySelector('.card__url').href;
      this.api.createArticle(article)
        .then((res) => {
          card.setAttribute('data-id', res.article._id);
          evt.target.closest('.card__icon').classList.add('card__marked');
        })
        .catch((e) => console.log(e));
    }
  }

  _clearCardField() {
    document.querySelector('.results__container').textContent = '';
    document.querySelector('.results__title').style.display = 'none';
  }

  // eslint-disable-next-line consistent-return
  _switchDate(time) {
    if (time) {
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
      return `${newTime[2]} ${month}, ${newTime[0]}`;
    }
  }

  showWarning() {
    this.template.querySelector('.card__icon_mark').addEventListener('mouseenter', (evt) => {
      const e = evt.target.closest('.card').querySelector('.card__warning');
      e.style.display = 'flex';
      setTimeout(() => {
        e.style.display = 'none';
      }, 2000);
    });
  }
}

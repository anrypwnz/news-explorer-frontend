export default class MainApi {
  // должен принимать на вход  IP
  constructor(host) {
    this.jwt_token = {};
    this.host = host;
    this.token = localStorage.getItem('token');
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _getResponseData(res) {
    if (!res.ok) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(res.status);
    }
    return res.json();
  }

  signup(data) {
    const { email } = data;
    const { password } = data;
    const { name } = data;
    return fetch(`${this.host}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => this._getResponseData(res));
  }

  signin(data) {
    const { email } = data;
    const { password } = data;
    return fetch(`${this.host}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    })
      .then((res) => this._getResponseData(res));
  }

  getUserData() {
    return fetch(`${this.host}/users/me`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));
  }

  getArticles() {
    return fetch(`${this.host}/articles`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));
  }

  createArticle(data) {
    const {
      keyword, title, text, date, source, image, link,
    } = data;
    return fetch(`${this.host}/articles`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        keyword, title, text, date, source, image, link,
      }),
    })
      .then((res) => this._getResponseData(res));
  }

  removeArticle(id) {
    return fetch(`${this.host}/articles/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));
  }
}

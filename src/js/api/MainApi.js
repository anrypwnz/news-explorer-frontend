export default class MainApi {
  // должен принимать на вход  IP
  constructor(host) {
    this.jwt_token = {};
    this.local = 'http://localhost:3000';
    this.puplicIp = 'http://84.201.134.251';
    this.ip = host;
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ4ZmNlNzQ2NGZjMDU2NjdlMDNjOTgiLCJpYXQiOjE1OTg2MjI1MTQsImV4cCI6MTU5OTIyNzMxNH0.M34411pHlVp-u11FijBuJnkLMmNuU4_S8u9oFKymGx0';
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
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  signup(data) {
    const { email } = data;
    const { password } = data;
    const { name } = data;
    fetch(`${this.local}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => this._getResponseData(res));
    // .then((res) => res.json())
    // .then((res) => {
    //   console.log(res);
    //   if (res.ok) {
    //     this.ok = 1;
    //   }
    // })
    // .catch((e) => console.log(e));
  }

  signin(data) {
    const { email } = data;
    const { password } = data;
    fetch(`${this.local}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    })
      .then((res) => this._getResponseData(res));

    // .then((res) => res.json())
    // .then((res) => { this.login = res; })
    // .then((res) => console.log(this.jwt_token))
    // .catch((e) => console.log(e));
  }

  getUserData() {
    fetch(`${this.local}/users/me`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));

    // .then((res) => res.json())
    // .then((res) => console.log(res))
    // .catch((e) => console.log(e));
  }

  getArticles() {
    fetch(`${this.local}/articles`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this._getResponseData(res));

  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  }

  // createArticle() {

  // }
  // removeArticle
}

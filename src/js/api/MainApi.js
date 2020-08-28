/* eslint-disable class-methods-use-this */
export default class MainApi {
  constructor() {
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ4ZmNlNzQ2NGZjMDU2NjdlMDNjOTgiLCJpYXQiOjE1OTg2MjI1MTQsImV4cCI6MTU5OTIyNzMxNH0.M34411pHlVp-u11FijBuJnkLMmNuU4_S8u9oFKymGx0';
  }

  signup(data) {
    fetch('http://84.201.134.251/signup', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }
  // signin() {

  // }
  // getUserData() {

  // }
  getArticles() {
    fetch('http://84.201.134.251/articles', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',

    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  // createArticle() {

  // }
  // removeArticle() {

  // }
}

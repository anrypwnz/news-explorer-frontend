/* eslint-disable class-methods-use-this */
export default class Authtorization {
  login(name) {
    localStorage.setItem('token', 'true');
    localStorage.setItem('name', name);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    if (localStorage.token) {
      return true;
    }
    return false;
  }
}

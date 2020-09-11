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
      console.log('## authorized name', localStorage.name);
      return true;
    }
    console.log('## unathorized');
    return false;
  }
}

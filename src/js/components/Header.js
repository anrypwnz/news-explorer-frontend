export default class Header {
  constructor(params) {
    const {
      authBtn, savedBtn, userName,
    } = params;
    this.authBtn = authBtn;
    this.savedBtn = savedBtn;
    this.userName = userName;
  }

  login(userName) {
    this.authBtn.style.display = 'none';
    this.userBtn.style.display = 'block';
    this.savedBtn.style.display = 'block';
    this.userName.textContent = userName;
  }

  unathorized() {
    this.authBtn.style.display = 'block';
    this.userBtn.style.display = 'none';
    this.savedBtn.style.display = 'none';
  }
}

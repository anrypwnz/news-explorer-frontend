export default class Header {
  constructor(popup, params) {
    const {
      authorizationBtn, savedBtn, userName, headerIcon, overlay, userBlockName,
    } = params;
    this.popup = popup;
    this.authorizationBtn = authorizationBtn;
    this.savedBtn = savedBtn;
    this.userName = userName;
    this.userBlockName = userBlockName;
    this.headerIcon = headerIcon;
    this.overlay = overlay;
    this._addEventListeners();
  }

  login(userName) {
    this.authorizationBtn.style.display = 'none';
    this.userBlockName.style.display = 'flex';
    this.savedBtn.style.display = 'block';
    this.userName.textContent = userName;
  }

  unathorized() {
    if (window.innerWidth < 730) {
      this.authorizationBtn.style.display = 'block';
    }
    this.userBlockName.style.display = 'none';
    this.savedBtn.style.display = 'none';
  }

  _addEventListeners() {
    if (this.authorizationBtn) {
      this.authorizationBtn.addEventListener('mousedown', () => {
        this.popup.setContent('auth');
      });
    }

    this.headerIcon.addEventListener('mousedown', () => {
      this._hamburger();
      const header = document.querySelector('.header');
      const headerMenu = document.querySelector('.header__menu');

      if (header.classList.contains('header_dark')) {
        if (headerMenu) {
          headerMenu.style.backgroundColor = '#F5F6F7';
        }
      }
    });

    this.userBlockName.addEventListener('mousedown', () => {
      localStorage.clear();
      document.location.reload();
    });
  }

  _hamburger() {
    const nav = document.querySelector('.header__nav');
    if (nav.className === 'header__nav') {
      this._overlayOn();
      nav.className += ' header__menu';
      document.body.style.overflow = 'hidden';
    } else {
      this._overlayOff();
      nav.className = 'header__nav';
      document.body.style.overflow = 'auto';
    }
  }

  _overlayOn() {
    this.overlay.style.display = 'block';
  }

  _overlayOff() {
    this.overlay.style.display = 'none';
  }
}

import Form from './Form';

export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  setContent(content) {
    if (content === 'authorization') {
      this.popup.insertAdjacentHTML('afterbegin', `
      <form name="main" class="popup__content">
        <div class="popup__close">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.3566 20L31.1781 28.8215L28.8211 31.1786L18.3497 20.7072C17.9592 20.3166 17.9592 19.6835 18.3497 19.2929L28.8211 8.82153L31.1781 11.1786L22.3566 20Z"
              fill="white" />
            <path
              d="M18.1307 20L9.30919 28.8215L11.6662 31.1786L22.1376 20.7072C22.5281 20.3166 22.5281 19.6835 22.1376 19.2929L11.6662 8.82153L9.30919 11.1786L18.1307 20Z"
              fill="white" />
          </svg>
        </div>
        <h2 class="popup__title">Регистрация</h2>
        <div class="input-group">
          <label class="input__label" for="email">Email</label>
          <input name="email" id="email" type="email" autocomplete="email" class="popup__input popup__input-email" placeholder="Email" minlength="2" maxlength="30" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$" required>
          <span class="popup__atention popup__validation-error">неправильный формат Email</span>
        </div>
        <div class="input-group">
          <label class="input__label" for="password">Пароль</label>
          <input name="password" id="password" type="password" autocomplete="current-password" class="popup__input popup__input-password" minlength="2" maxlength="30"  placeholder="Пароль" required>
          <span class="popup__atention popup__validation-error">пароль от 2х до 30 символов</span>

        </div>
        <div class="input-group">
          <label class="input__label" for="name">Имя</label>
          <input name="name" id="name" type="text" autocomplete="username" class="popup__input popup__input-name" minlength="2" maxlength="20" pattern="^[А-ЯЁA-Z][а-яёa-z]+(-[А-ЯЁA-Z][а-яёa-z]*)?$" placeholder="Имя" required>
          <span class="popup__atention popup__validation-error">имя с заглавной буквы, без цифр</span>
        </div>
        <div class="input-group">
          <span class="popup__atention">Пользователь с таким email уже зарегистрирован</span>
          <input name="submit" type="submit" class="popup__input popup__input-submit" value="Зарегистрироваться" disabled>
        </div>
        <span class="popup__helper">или <a class="popup__helper_link popup__login">Войти</a></span>
      </form>
      `);
    } if (content === 'login') {
      this.popup.insertAdjacentHTML('afterbegin', `
      <form name="login" class="popup__content">
      <div class="popup__close">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.3566 20L31.1781 28.8215L28.8211 31.1786L18.3497 20.7072C17.9592 20.3166 17.9592 19.6835 18.3497 19.2929L28.8211 8.82153L31.1781 11.1786L22.3566 20Z"
            fill="white" />
          <path
            d="M18.1307 20L9.30919 28.8215L11.6662 31.1786L22.1376 20.7072C22.5281 20.3166 22.5281 19.6835 22.1376 19.2929L11.6662 8.82153L9.30919 11.1786L18.1307 20Z"
            fill="white" />
        </svg>
      </div>
      <h2 class="popup__title">Вход</h2>
      <div class="input-group">
        <label class="input__label" for="email">Email</label>
        <input name="email" id="email" type="email" autocomplete="email" class="popup__input popup__input-email" placeholder="Email" minlength="2" maxlength="30" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$" required>
        <span class="popup__atention popup__validation-error">неправильный формат Email</span>
      </div>
      <div class="input-group">
        <label class="input__label" for="password">Пароль</label>
        <input name="password" id="password" type="password" autocomplete="current-password" class="popup__input popup__input-password" minlength="2" maxlength="30"  placeholder="Пароль" required>
        <span class="popup__atention popup__validation-error">пароль от 2х до 30 символов</span>
      </div>
      <div class="input-group">
        <span class="popup__atention">Пользователь с таким email уже зарегистрирован</span>
        <input name="submit" type="submit" class="popup__input popup__input-submit" value="Войти" disabled>
      </div>
      <span class="popup__helper">или <a class="popup__helper_link popup__authorization" href="#">Зарегистрироваться</a></span>
    </form>
      `);
    } if (content === 'success') {
      this.popup.insertAdjacentHTML('afterbegin', `<div class="popup__content">
      <div class="popup__close">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.3566 20L31.1781 28.8215L28.8211 31.1786L18.3497 20.7072C17.9592 20.3166 17.9592 19.6835 18.3497 19.2929L28.8211 8.82153L31.1781 11.1786L22.3566 20Z"
            fill="white" />
          <path
            d="M18.1307 20L9.30919 28.8215L11.6662 31.1786L22.1376 20.7072C22.5281 20.3166 22.5281 19.6835 22.1376 19.2929L11.6662 8.82153L9.30919 11.1786L18.1307 20Z"
            fill="white" />
        </svg>
      </div>
      <h2 class="popup__title">Пользователь успешно зарегистрирован!</h2>
      <span class="popup__helper"><a class="popup__helper_link popup__login" href="#">Выполнить вход</a></span>
    </div>`);
    }
    const form = new Form(this.popup.querySelector('form'));
    form.setEventListeners();
  }

  setEventListeners() {
    document.querySelector('.popup__close').addEventListener('mousedown', () => {
      this.close();
      this.clearContent();
    });
    if (document.querySelector('.popup__authorization')) {
      document.querySelector('.popup__authorization').addEventListener('mousedown', () => {
        this.clearContent();
        this.setContent('authorization');
        this.setEventListeners();
      });
    }
    if (document.querySelector('.popup__login')) {
      document.querySelector('.popup__login').addEventListener('mousedown', () => {
        this.clearContent();
        this.setContent('login');
        this.setEventListeners();
      });
    }
  }

  clearContent() {
    this.popup.innerHTML = '';
  }

  open() {
    this.popup.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
    this.setEventListeners();
  }

  close() {
    this.popup.classList.remove('popup_active');
    document.body.style.overflow = 'auto';
  }
}

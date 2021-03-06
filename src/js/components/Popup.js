/* eslint-disable no-useless-escape */
import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(popup, api) {
    super();
    const {
      popupWindow, closeElem, authorization, login, loginLink,
    } = popup;

    this.popupWindow = popupWindow;
    this.closeElem = closeElem;
    this.authorization = authorization;
    this.login = login;
    this.loginLink = loginLink;
    this.api = api;
  }

  setContent(type) {
    if (type === 'auth') {
      this.open();
      this.popupWindow.insertAdjacentHTML('afterbegin', `<form name="main" class="popup__content">
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
        <input name="email" id="email" type="email" autocomplete="email" class="popup__input popup__input-email"
          placeholder="Email" minlength="2" maxlength="30"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$" required>
        <span class="popup__atention popup__validation-error">неправильный формат Email</span>
      </div>
      <div class="input-group">
        <label class="input__label" for="password">Пароль</label>
        <input name="password" id="password" type="password" autocomplete="current-password"
          class="popup__input popup__input-password" minlength="2" maxlength="30" placeholder="Пароль" required>
        <span class="popup__atention popup__validation-error">пароль от 2х до 30 символов</span>

      </div>
      <div class="input-group">
        <label class="input__label" for="user-name">Имя</label>
        <input name="user-name" id="user-name" type="text" autocomplete="username" class="popup__input popup__input-name"
          minlength="2" maxlength="20" pattern="^[А-ЯЁA-Z][а-яёa-z]+(-[А-ЯЁA-Z][а-яёa-z]*)?$" placeholder="Имя"
          required>
        <span class="popup__atention popup__validation-error">имя с заглавной буквы, без цифр</span>
      </div>
      <div class="input-group">
        <span class="popup__atention popup__email_error">Пользователь с таким email уже зарегистрирован</span>
        <input name="submit" type="submit" class="popup__input popup__input-submit" value="Зарегистрироваться"
          disabled>
      </div>
      <span class="popup__helper">или <a class="popup__helper_link popup__login" href="#">Войти</a></span>
    </form>`);
    }
    if (type === 'login') {
      this.popupWindow.insertAdjacentHTML('afterbegin', `
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
          <span class="popup__atention popup__data_error">Неверный email или пароль</span>
          <input name="submit" type="submit" class="popup__input popup__input-submit" value="Войти" disabled>
        </div>
        <span class="popup__helper">или <a class="popup__helper_link popup__authorization" href="#">Зарегистрироваться</a></span>
      </form>
      `);
    } if (type === 'success') {
      this.popupWindow.insertAdjacentHTML('afterbegin', `
      <form name="success" class="popup__content">
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
    </form>
    `);
    }

    this.setEventListeners();
  }

  setEventListeners() {
    const form = this.popupWindow.querySelector('form');
    let data;

    if (form.name === 'main' || form.name === 'success') {
      this.popupWindow.querySelector('.popup__login').addEventListener('mousedown', () => {
        this.clearContent();
        this.setContent('login');
      });
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        data = {
          email: form[0].value,
          password: form[1].value,
          name: form[2].value,
        };
        localStorage.setItem('name', data.name);
        this.api.signup(data)
          .then((res) => console.log(res.message))
          .then(() => {
            this.clearContent();
            this.setContent('success');
          })
          .catch((e) => {
            console.log(e);
            if (e === 409) {
              this.popupWindow.querySelector('.popup__email_error').style.display = 'block';
              setTimeout(() => { this.popupWindow.querySelector('.popup__email_error').style.display = 'none'; }, 2000);
            }
          });
      });
    }
    if (form.name === 'login') {
      this.popupWindow.querySelector('.popup__authorization').addEventListener('mousedown', () => {
        this.clearContent();
        this.setContent('auth');
      });
      form.addEventListener('submit', async (evt) => {
        evt.preventDefault();
        data = {
          email: form[0].value,
          password: form[1].value,
        };
        this.api.signin(data)
          .then((res) => {
            this.close();
            localStorage.setItem('token', res.token);
          })
          .then(() => document.location.reload())
          .catch((e) => {
            console.log(e);
            if (e === 401) {
              this.popupWindow.querySelector('.popup__data_error').style.display = 'block';
              setTimeout(() => { this.popupWindow.querySelector('.popup__data_error').style.display = 'none'; }, 2000);
            }
          });
      });
    }

    this.popupWindow.querySelector('.popup__close').addEventListener('mousedown', () => {
      this.close();
    });

    form.addEventListener('input', () => {
      if (form[0].validity.valid
        && form[1].validity.valid
        && form[2].validity.valid) {
        form.submit.removeAttribute('disabled');
      } else {
        form.submit.setAttribute('disabled', 'true');
      }
    });
  }

  clearContent() {
    this.popupWindow.innerHTML = '';
  }

  open() {
    this.popupWindow.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (document.querySelector('.popup_active')) {
      this.popupWindow.classList.remove('popup_active');
      document.body.style.overflow = 'auto';
      this.clearContent();
    }
  }
}

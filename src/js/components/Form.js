import MainApi from '../api/MainApi';

export default class Form {
  constructor(form) {
    this.form = form;
    // this.setEventListeners();
  }

  // setServerError(error) {

  // }

  // _validateInputElement(elem) {
  //   this.form.elements;
  // }

  // _validateForm(type) {
  //   this.form = document.form.type;
  // }

  setEventListeners() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      let data;
      if (this.form.name === 'login') {
        data = {
          email: this.form[0].value,
          password: this.form[1].value,
        };
      } else {
        data = {
          email: this.form[0].value,
          password: this.form[1].value,
          name: this.form[2].value,
        };
      }
      const api = new MainApi();
      api.signup({ data })
      console.log(data);
    });
    this.form.addEventListener('input', () => {
      // TODO проверить в зависимости от формы количество инпутов
      if (this.form[0].validity.valid
        && this.form[1].validity.valid
        && this.form[2].validity.valid) {
        this.form.submit.removeAttribute('disabled');
      } else {
        this.form.submit.setAttribute('disabled', 'true');
      }
    });
  }

  // _clear() {

  // }

  // _getInfo() {

  // }
}

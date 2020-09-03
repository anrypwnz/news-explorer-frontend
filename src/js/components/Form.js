export default class Form {
  constructor(form, mainApi) {
    this.form = form;
    this.api = mainApi;
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

  // validity() {
  // let data;
  // this.form.addEventListener('submit', (evt) => {
  //   evt.preventDefault();
  //   if (this.form.name === 'login') {
  // data = {
  //   email: this.form[0].value,
  //   password: this.form[1].value,
  // };
  //     this.api.signin(data)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((e) => console.log(e));
  //   } else {
  //     data = {
  //       email: this.form[0].value,
  //       password: this.form[1].value,
  //       name: this.form[2].value,
  //     };
  //     this.api.signup(data);
  //   }
  // });
  // this.form.addEventListener('input', () => {
  //   if (this.form[0].validity.valid
  //     && this.form[1].validity.valid
  //     && this.form[2].validity.valid) {
  //     this.form.submit.removeAttribute('disabled');
  //   } else {
  //     this.form.submit.setAttribute('disabled', 'true');
  //   }
  // });
  // this.api.signin(data);
  // }

  // _clear() {

  // }

  // _getInfo() {

  // }
}

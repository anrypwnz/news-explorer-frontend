export default class Popup {
  // setContent {

  // }
  // clearContent {

  // }
  open() {
    console.log(this);
    document.querySelector('.popup').classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    document.querySelector('.popup').classList.remove('popup_active');
    document.body.style.overflow = 'auto';
  }
}

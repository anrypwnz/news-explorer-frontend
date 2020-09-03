export default class BaseComponent {
  constructor() {
    this._listeners = [];
  }

  _addListener(element, event, callback) {
    element.addEventListener(event, callback);
    this._listeners.push({ element, event, callback });
  }

  _setListeners(listeners) {
    listeners.forEach((listener) => {
      this._addListener(...listener);
    });
  }

  _clearListeners() {
    this._setListeners.forEach(({ element, event, callback }) => {
      element.removeEventListener(event, callback);
    });
  }
}

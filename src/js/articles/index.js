import '../../css/index.css';
import '../index';
import Authorization from '../utils/Authorization';

const auth = new Authorization();

if (!auth.isLoggedIn()) {
  // eslint-disable-next-line no-restricted-globals
  location.href = './index.html';
}

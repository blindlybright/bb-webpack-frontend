import '../scss/styles.scss';
import { _ } from './vendors.js';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class Comp {
  constructor() {
    console.log(111333);
    debugger;
  }
}
new Comp;

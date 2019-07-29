import '../scss/styles.scss';
import { _ } from './vendors.js';
import { add } from './fn.js';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class Comp {
  constructor() {

    console.log(add(1, 107));
  }
}
new Comp;

fetch('json/json.json', {})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(JSON.stringify(response));
  }, (error) => {
    console.error(error);
  });

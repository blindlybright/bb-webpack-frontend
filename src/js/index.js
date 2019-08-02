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

// NB: next will get an error while served locally from file://
fetch('json/json.json', {})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(JSON.stringify(response));
  }, (error) => {
    console.error(error);
  });


// NB: example of async/await using
async function fetchExample() {
  let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
  console.log(39, response);

  let commits = await response.json(); // получаем тело ответа и преобразовываем в JSON
  console.log(42, commits);

  return commits;
}

fetchExample().then((commits) => {
  console.log(49, commits[0].author.login);
});

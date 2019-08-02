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

class ComponentClass {
    constructor() {
        console.log(add(1, 107));
    }
}
new ComponentClass;



/*
 * NB: next will get an error while served locally with file://
 */
fetch(
    '/json/json.json'
)
.then((response) => response.json())
.then((response) => {
    console.log(response);
    console.log(JSON.stringify(response));
}, (error) => {
    console.error(error);
});



/*
 * NB: example of async/await syntax
 */
async function fetchExample(url) {
    const response = await fetch(url);
    console.log('response on ', url, ' is ', response);

    const json = await response.json(); // получаем тело ответа и преобразовываем в JSON
    console.log('resulted json of ', url, ' is ', json);

    return json;
}



/*
 * NB: work with mocker-api configured data
 */
// fetch original data
fetchExample(
    // 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
    'https://api.github.com/repos/blindlybright/bb-webpack-frontend/commits'
).then((commits) => {
    console.log(59, commits[0].author.login);
});

// fetch data through webpack-dev-server proxy
fetchExample(
    // '/repos/javascript-tutorial/en.javascript.info/commits'
    '/repos/blindlybright/bb-webpack-frontend/commits'
).then((commits) => {
    console.log(67, commits[0].author.login);
});

// fetch mocker-api configured data
fetchExample(
    '/repos/hello'
).then((data) => {
    console.log(74, data);
});

// fetch mocker-api configured data
fetchExample(
    '/api/jobs'
).then((data) => {
    console.log(81, data);
});



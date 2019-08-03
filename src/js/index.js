// styles
import '../scss/styles.scss';

// executables modules, please avoid this pattern
import './examples/fetch';

// includes used
import { ComponentClass } from './examples/component.class';
import {
    createDOMComponent,
    fetchExample
} from './examples/fn';



new ComponentClass;



document.body.appendChild(createDOMComponent());



// fetchExample used to fetch original data directly
fetchExample(
    // 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
    'https://api.github.com/repos/blindlybright/bb-webpack-frontend/commits'
).then((commits) => {
    console.log(59, commits[0].author.login);
});



/*
 * NB: work with mocker-api configured data
 */
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

// styles
import '../scss/styles.scss';

// executables modules, please avoid this pattern
import './examples/fetch';

// includes used
import {
    ComponentClass,
} from './examples/component.class';
import {
    createDOMComponent,
    fetchExample,
    wrapLinkToLocalApiMocker,
} from './examples/fn';


import { str, testType } from './examples/test';

console.log(17, str, testType('123')); // eslint-disable-line @typescript-eslint/no-magic-numbers

new ComponentClass;





document.body.appendChild(createDOMComponent());



// fetchExample used to fetch original data directly
// eslint-disable-next-line @typescript-eslint/no-floating-promises,promise/catch-or-return
fetchExample(
    // 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
    'https://api.github.com/repos/blindlybright/bb-webpack-frontend/commits',
).then((commits): void => {
    console.log(59, commits[0].author.login); // eslint-disable-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-unsafe-member-access
    return; // eslint-disable-line sonarjs/no-redundant-jump
});



/*
 * NB: work with mocker-api configured data
 */
// fetch data through webpack-dev-server proxy
// eslint-disable-next-line @typescript-eslint/no-floating-promises,promise/catch-or-return
fetchExample(
    // '/repos/javascript-tutorial/en.javascript.info/commits'
    wrapLinkToLocalApiMocker('/repos/blindlybright/bb-webpack-frontend/commits'),
).then((commits) => {
    console.log(67, commits[0].author.login); // eslint-disable-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-unsafe-member-access
    return; // eslint-disable-line sonarjs/no-redundant-jump
});

// fetch mocker-api configured data
// eslint-disable-next-line @typescript-eslint/no-floating-promises,promise/catch-or-return
fetchExample(
    wrapLinkToLocalApiMocker('/noRepos/hello'),
).then((data) => {
    console.log(74, data); // eslint-disable-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-unsafe-member-access
    return; // eslint-disable-line sonarjs/no-redundant-jump
});

// fetch mocker-api configured data
// eslint-disable-next-line @typescript-eslint/no-floating-promises,promise/catch-or-return
fetchExample(
    wrapLinkToLocalApiMocker('/api/jobs'),
).then((data) => {
    console.log(81, data); // eslint-disable-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-unsafe-member-access
    return; // eslint-disable-line sonarjs/no-redundant-jump
});

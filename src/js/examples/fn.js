// vendor libs
import { _ } from '../vendors';



const noMocksWebpackMocks = process.env.NO_MOCKS === 'true';

const wrapLinkToLocalApiMocker = (s) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return (!noMocksWebpackMocks ? 'http://localhost:8000' : '') + s;
};



const isProduction = process.env.NODE_ENV === 'production';

const wrapLinkWithWebpackContextPrefix = (s) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return (isProduction ? '/spa' : '') + s;
};



/*
 * NB: example of async/await syntax
 */
async function fetchExample(url) {

    const response = await fetch(url); // eslint-disable-line @typescript-eslint/no-unsafe-argument
    console.log('response on ', url, ' is ', response);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await response.json(); // получаем тело ответа и преобразовываем в JSON
    console.log('resulted json of ', url, ' is ', json);

    return json; // eslint-disable-line @typescript-eslint/no-unsafe-return
}


function createDOMComponent() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    element.innerHTML = _.join(['Hello', 'webpack' ], ' ');

    const elementI = document.createElement('i');
    elementI.className = 'icon-currency icon-currency_rouble';
    element.append(elementI);

    const elementV = document.createElement('div');
    elementV.innerHTML = 'app version:' + process.env.VERSION;
    element.append(elementV);

    const elementE = document.createElement('div');
    elementE.innerHTML = 'environment:' + process.env.NODE_ENV;
    element.append(elementE);

    return element;
}

const div = (a, b) => {
    return a / b;
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/restrict-plus-operands
const add = (a, b) => a + b;
const mul = (a, b) => a * b;

export {
    add,
    mul,
    div,
    createDOMComponent,
    fetchExample,
    wrapLinkToLocalApiMocker,
    wrapLinkWithWebpackContextPrefix,
};

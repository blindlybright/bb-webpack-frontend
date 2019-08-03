// vendor libs
import { _ } from "../vendors";

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


function createDOMComponent() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

const div = (a, b) => {
	return a / b;
};
const add = (a, b) => a + b;
const mul = (a, b) => a * b;

export {
	add,
	mul,
	div,
	createDOMComponent,
	fetchExample
};

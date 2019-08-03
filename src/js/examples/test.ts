import { a } from './tstest.js';

const str: string = testType('testString: ' + a);
// const num: number = 1234567;
// const b: number = testType(num);

function testType(s: string): string {
    return s + ' plus testTyped';
}

export {
    str,
    testType
}

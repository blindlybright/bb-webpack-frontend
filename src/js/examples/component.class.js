import { add } from './fn.js';

export class ComponentClass {
    constructor() {
        console.log(add(1, 107)); // eslint-disable-line @typescript-eslint/no-magic-numbers
    }
}

// another possible syntax:
// export default ComponentClass;
// ^ is for next construct:
//     import { ComponentClass } from './examples/component.class';

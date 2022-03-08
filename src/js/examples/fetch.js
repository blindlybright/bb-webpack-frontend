import { wrapLinkWithWebpackContextPrefix } from './fn';

/*
 * NB: next will get an error while served locally with file://
 */
// eslint-disable-next-line promise/catch-or-return
fetch(
    wrapLinkWithWebpackContextPrefix('/json/json.json'),
)
    .then((response) => response.json())
    .then((response) => { // eslint-disable-line promise/always-return
        console.log(response);
        console.log(JSON.stringify(response));
    }, (error) => {
        console.error(error);
    });

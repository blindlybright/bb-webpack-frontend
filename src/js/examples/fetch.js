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

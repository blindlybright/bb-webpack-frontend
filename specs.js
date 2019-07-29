
// !!! require.context is a webpack-specific feature, so it doesn't work in jest (possibly You can try to mock it somehow)
// This will search for files ending in .spec.js and require them
// so that they are added to the webpack bundle

const context = require.context('./src', true, /.*\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;

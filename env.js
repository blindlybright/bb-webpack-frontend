// import { BASE_NAME } from './src/js/004_config/constants';

// const BASE_NAME = process.env.NODE_ENV === 'development'
//     ? ''
//     : 'client/';
//
// const BASE_NAME = 'client/';


const getBaseName = (isProduction) => {
    return isProduction
        ? 'spa/'
        : '';
};

module.exports = {
    // BASE_NAME,
    getBaseName,
};

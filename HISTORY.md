### ChangeLog

###### v0.0.3 [2019.07.13|2:12~3]

* add images processing (serve && [likely for svg] copy)
* fix for images paths from css (& file-loader is as dep for url-loader)
* fetch example
* copy for jsons

###### v0.0.2 [2019.07.09|5:47~2.5]

Done:
* refactoring syntax of webpack modes configurations
* add stats analyzation
* add babel preloader for es6 (with preset-env && plugin-proposal-object-rest-spread)
* sourcemaps for js, HMR while dev mode
* uglification && remove comments for production js-bundle
* make vendors.js out of 'node_modules' imports
* add scss serving, HMR, source maps
* add postcss autoprefixer + browserlist config
* move index.css into styles.css

all is still good for development && production mode (resources HMR (except html, not very actual) in development, building stuff correctly while production mode)

###### v0.0.1
Initial commit

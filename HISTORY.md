### ChangeLog

###### v0.0.13 [2019.08.03|20:50~1]

* add `noProxy` flag & `start:noproxy` task
* add coverage remove on clear
* add `NO_MOCKS` command line flag, add `NO_WEBPACK_MOCKS` flag with js
* add `tinyServer` for serve:compiled task
* add `eslint@7` as linter
  * add `.eslintrc.json` & `.eslintignore` as configs for eslint
* add ability to use `css` with `scss`
* add `rouble` `font` as example
  * add examples of use rouble font icon
* add `__*` mask for `.gitignore`
* add `env.js` to define environment contexts (now prod is deployed to `spa/` folder)
* fix `autoprefixer` use with `postcss-loader`
* fix `webfont` use with webpack
* add wrapper `wrapLinkWithWebpackContextPrefix` for correct fetch paths in different environments
* add wrapper `wrapLinkToLocalApiMocker` for fix mocked data url on different environments
* add use of app `VERSION`
* update node packages: `typescript`, `postcss-loader`, `node-sass`, `mocker-api`, `mocha`, `husky`
* add `postcss`, `eslint`, `eslint-plugin-optimize-regex`, `eslint-plugin-promise`, `eslint-plugin-sonarjs`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`
* add appropriate tasks to package.json
* add `package-lock.json` versioning

[tested on node@14.19.0, npm@6.14.16]

###### v0.0.12 [2019.08.03|20:50~1]

* add `typescript` language supporting
* add examples for inclusion of ts into js & back
* tests for `typescript`
* types for `mocha`

###### v0.0.11 [2019.08.02|20:45~1.5]

* add ability of `mocks` writing (for independent `api` development)

###### v0.0.10 [2019.08.02|17:05~2]

* add `async`|`await` support for javascript with `babel` transpiler

###### v0.0.9 [2019.08.02|13:05~4]

* add `sinon` for spies, stubs, fakes
* add simple examples for sinon tests
* remove `prepush` git hook testing

###### v0.0.8 [2019.07.30|16:40~.5]

* add `chai` for asserts library

###### v0.0.7 [2019.07.30|8:40~.5]

* add `husky` package for precommit & prepush git hooks

###### v0.0.6 [2019.07.29|23:24~.5]

* add `ROADMAP.md`
* fixes for `README.md`

###### v0.0.5 [2019.07.29|22:52~4]

* add `istanbul-instrumenter-loader` for coverage reporting
* add preventing coverage generation while watching tests
* minor refactor tests tasks
* add correct tests use (see specs.js)

###### v0.0.4 [2019.07.29|14:52~16?]

* add karma testing engine
* add mocha framework for karma testing
* split tests into dynamically connectable parts (*.spec.js)
* add watch mode for tests monitoring (and for sources changing)
* add sourcemaps for tests
* add chrome launcher for karma

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

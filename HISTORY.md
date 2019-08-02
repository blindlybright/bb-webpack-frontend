### ChangeLog

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

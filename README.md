# ES6 Marionette Proof of Concept

Currently most of projects I am working on are based on Backbone and Marionette. None of them is a simple read/write to/from model/collection, so REST services are responding with lot of data which need to be somehow parsed.
All of this does not matter when I was considering switching to ES6, but just to give you a background and cut questions why not angular/ember/knockout/someotherfancycooltrendyframework.

## What is used?

* [NodeJS](https://nodejs.org) - just in case you do not know that it is essential
* [NPM](https://www.npmjs.com/) - you need to install the latest version (`npm install -g npm`)
* [Browserify](http://browserify.org/) - to get rid of AMD modules (especialy RequireJS which drive me crazy sometimes)
* [Babel](https://babeljs.io/) - to compile ES6 code to ES5
* [PostCSS](https://github.com/postcss/postcss) - because SASS and LASS compilers have lot of problems with latest NPM (I do not know why and I don't care, tools must just work)
* [express.js](http://expressjs.com/) - I use it to create server to serve mocks

## Why not other tools?

You do not need Bower, Gulp or Grunt, or some other task managers. All things you can do with NPM. It is easier and clearer. I have never used Bower, cos I never saw anything good in it. And still I don't need it. All you need is commands passed to "scripts" object in package.json.

## How to start?

1. Install [NodeJS](https://nodejs.org)
2. Install [NPM](https://www.npmjs.com/) `npm install -g npm`
3. Install all modules `npm i`
4. Install [LiveReload](http://livereload.com/) plugin to your browser
5. Use scripts defined in package.json (write in command line, eg.: `npm run dev:mock`):
	* `build` - builds minimised JavaScript
	* `dev:build:js` - builds concatenated JavaScript
	* `dev:build:css` - builds concatenated CSS
	* `watch:css` - watches for changes in `app/assets/css` folder and build CSS
	* `watch:js` - watches for changes in `app` folder and build JS
	* `livereload` - watches for changes in `public` folder and notify browser to reload css and JS files
	* `dev:mock` - runs node server `http://localhost:8080`, watchers and livereload
	* `dev` - runs watchers and livereload

## Why tabs for indentation?

Because. Tabs are much more flexible for teams. I do not care that in github it looks horrible. I write and read code in editor not in github.

## TODO
* TESTS!
* local modules for large projects
* module management to avoid ./../../../
* better mock management
* building bundles for modules/components/ect.

## Thanks
Thanks to [rofrol](https://github.com/rofrol) for publishing [react-starter-kit](https://github.com/rofrol/react-starter-kit) that inspired me to create this PoC.

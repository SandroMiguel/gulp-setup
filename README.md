# Gulp 4 configuration file

[Gulp](http://gulpjs.com/) is an open-source task runner to automate tasks.

All Gulp configuration goes in `gulpfile.js` where plugins are loaded and tasks are defined.

## Goal

-   Sass compilation
    -   CSS minification
    -   Rename files to `.min.css`
    -   Copy minified CSS to public folder.
-   Transpile ES6+ using [Babel](https://babeljs.io/)
    -   JS minification
        -   Rename files to `.min.js`
        -   Generate JS source maps
-   Cache bust
-   Watch for changes in code

## Installation

NOTE: you need to have [Node](http://nodejs.org/) installed on your computer.

### Step 1. Install the Gulp command line utility

#### Install Gulp CLI with Yarn globally

```sh
yarn global add gulp-cli
```

#### Or install Gulp CLI with npm globally

```sh
npm install -g gulp-cli
```

### Step 2. Install the Gulp package in your devDependencies

#### Install Gulp with Yarn

```sh
yarn add gulp --dev
```

#### Or install Gulp with npm

```sh
npm install --save-dev gulp
```

## Dev Dependencies

These are the dependencies/plugins that we will use

-   [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core): Babel compiler core
-   [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env): A Babel preset for each environment
-   [autoprefixer](https://github.com/postcss/autoprefixer): PostCSS plugin to parse CSS and add vendor prefixes to CSS rules
-   [cssnano](https://github.com/cssnano/cssnano): A modular minifier, built on top of the PostCSS ecosystem
-   [gulp-babel](https://github.com/babel/gulp-babel): Gulp plugin for Babel
-   [gulp-postcss](https://github.com/postcss/gulp-postcss): PostCSS Gulp plugin to pipe CSS through several plugins, but parse CSS only once.
-   [gulp-rename](https://github.com/hparra/gulp-rename): Rename files easily
-   [gulp-replace](https://github.com/lazd/gulp-replace): A string replace plugin for Gulp
-   [gulp-sass](https://github.com/dlmanning/gulp-sass): SASS plugin for Gulp
-   [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps): Source map support for Gulp
-   [gulp-uglify](https://github.com/terinjokes/gulp-uglify): Minify files with UglifyJS

### Step 3. Installing Gulp plugins

Install all necessary plugins

#### With Yarn

```sh
yarn add @babel/core @babel/preset-env autoprefixer cssnano gulp-babel gulp-postcss gulp-rename gulp-replace gulp-sass gulp-sourcemaps gulp-uglify --dev
```

#### Or with npm

```sh
npm install --save-dev @babel/core @babel/preset-env autoprefixer cssnano gulp-babel gulp-postcss gulp-rename gulp-replace gulp-sass gulp-sourcemaps gulp-uglify
```

## Running

### Step 4. Copy the Gulp file

Copy the [gulpfile.js](gulpfile.js) to the root of your project and run Gulp.

### Step 5. Run the default task

Development environment

Run `gulp` to deploy your app for distribution in the `public` folder.

```sh
gulp
```

This will watches the following files:

-   .scss
-   .js

When a file changes, it runs its associated task.

### Single task

To run individual tasks.

```sh
gulp [task name]
```

Example:

```sh
gulp sass
```

## Task list

All available tasks

-   `default`: Default task (can be omitted)
-   `javascript`: It transpiles, adds sourcemaps and uglify your JS files
-   `style`: It compiles scss into css file, adds sourcemaps and minify
-   `watch`: It watches for files changes

## Predefined file structure

```
your-app/
|—— src/
|   |—— sass/
|   |   |—— somefile.scss
|   |   |—— [otherfile].scss
|   |—— js/
|   |   |—— somefile.js
|   |   |—— [otherfile].js
|   |—— img/
|   |   |—— [original image files]
|—— public/
|   |—— css/
|   |   |—— somefile.min.css
|   |   |—— [otherfile].min.css
|   |—— js/
|   |   |—— somefile.min.js
|   |   |—— [otherfile].min.js
|   |—— img/
|   |   |—— [optimized image files]
|—— gulpfile.js
|—— package.json
```

## Contributing

Want to contribute? All contributions are welcome. Read the [contributing guide](CONTRIBUTING.md).

## Questions

If you have questions tweet me at [@sandro_m_m](https://twitter.com/sandro_m_m) or [open an issue](../../issues/new).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

**~ sharing is caring ~**

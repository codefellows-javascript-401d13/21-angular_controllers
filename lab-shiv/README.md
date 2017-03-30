![cf](https://i.imgur.com/7v5ASc8.png) Lab 21 - Angular Controllers
======

## To Submit this Assignment
  * create a new branch and work off of the same fork that you made yesterday
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`

## Note
  * be sure to install the following dependencies and related versions:
    * **extract-text-webpack-plugin:** `npm i -S extract-text-webpack-plugin@1.0.1`
    * **webpack:** `npm i -S webpack@1.14.0`
    * **webpack-dev-server:** `npm i -S webpack-dev-server@1.16.2`

## Description
  * refactor the previous lab to use the **controller as** syntax
  * add a `.babelrc` file and use the **babel loader** on your JS files
  * add a form and submit button that will be used to save the current state of the cow's text
    * use the `ng-submit` directive to control the form's on-submit functionality
    * add a button that uses the `ng-click` directive to populate a second `pre` tag with the current `pre` tag state
  * add a button that uses the `ng-click` directive to create an **undo** effect
    * whenever this button is clicked, it should reset the second `pre` tag with the content it last showed
  * add a select menu that uses the `ng-repeat` directive
    * this should be used to populate the select menu with the names of all `cowsay` files
      * hint: `cowsay.list((err, list) => {})`
  * when a `cowsay` filename is selected from the menu, have the first `pre` tag use the selected cowfile
  * use the `ng-show` directive to show the second `pre` tag **only** if the history state is not empty

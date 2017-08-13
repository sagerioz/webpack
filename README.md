# Webpack Exercise



### About

This repo is an exercise in using Webpack, the module loader of choice for the React community.

### Notes

Earlier module loaders included require.js and browserify.

To create this example site, follow these steps:
1. Create directory with HTML file and module dependencies as demo shows
2. $ npm init // to be able to use nodeJS
3. $ npm i -S webpack (or install globally)
4. $ touch webpack.config.js
5. webpack.config.js files can get very complicated. The one in this example is a good starting point to become familiar with it.
6. $ webpack // builds a scripts.min.js file, which will be un-minified at this point.
7. try changing the environment to be "production":
   $ NODE_ENV=production webpack
   or in package.json add this under scripts:
   ```
   {
     ...
     "scripts": {
     "start": "NODE_ENV=production node ./js/scripts.js"
    }
    ...
    }
    ```

8. $ npm i -S jquery
9. $ npm i -S lodash
10. try requiring and using both of these packages in the modules, remembering to run webpack to load your modules.
11. Note that trying to run $.fn.jquery in the console will yield 'Uncaught TypeError: Cannot read property 'jquery' of undefined'. Jquery does NOT exist on the global scope, thanks to webpack.
12. Go checkout mockaroo.com for a sample realistic test data in CSV, JSON, SQL, and Excel formats. Paste it into module 2 as demo.
13. Nodemon is a good way to handle the webpack for you in general.
14. npm i nodemon

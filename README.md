# BACKBONE BOILERPLATE

### TECHNOLOGIES

* [Backbone](http://backbonejs.org/) - Front end app framework
* [Require.js](http://requirejs.org/) - Dependency management for Backbone
* [Underscore](http://underscorejs.org/) - Utility library and front end templating
* [jQuery](http://jquery.com) - DOM manipulation
* [Bower](http://bower.io/) - Package / vendor dependency management
* [Gulp](http://gulpjs.com/) - Task runner
* [SASS]() - Stylesheets

### SETUP

* clone the repo
* make sure you have node and bower installed
* in the root of the repo, run `sudo npm install`
* in the root of the repo, run `bower install`

### VIEWING THE SITE

If you are on a mac, simply `cd` into the folder where you saved your repo, and run a python simple server. For example:

```
cd '/Users/[username]/Sites/[client_name]/[project_name]/' && python -m SimpleHTTPServer 8000
```

where 8000 is your port number (can be whatever you choose)

Open a separate terminal window  to the same folder, and run

`gulp`

which starts the task runner, which will watch our css files for any changes, and compile them on the fly.

### BACKBONE STRUCTURE

* The app is initiated in the index.html file, which loads the `main.css` stylesheet, and the `require.js` javascript file.
* All stylesheets are written in SASS and compiled into a single stylesheet (`main.css`)
* All scripts are loaded as needed by require.js. The inclusion of require.js specifies a `data-main` parameter, which tells require the path to the main javascript file that will kick off our backbone app (`app/main`)
* `main.js` tells require where to find all of the necessary libraries for our backbone app, as well as our template files. It then lists `app` as a dependency, and initializes app.
* `app.js` kicks off our router
* `router.js` must list all views as dependencies. Based on the route the browser has in their address bar, we render the appropriate view here. In this case, the bootstrap just has a home page view (`views/home/HomeView.js`). We also start backbone's history here, so we can manage the back and forth among views.
* `homeView.js` - in addition to any dependencies this view will need, we also load any models, collections, or templates as dependencies.  All of our primary views will use the `$('#page')` DOM element as the `el` variable - meaning this element will get emptied and filled with the appropriate view as we navigate.
* `homeModel.js` provides the data our view will need. In this case, it has been left as simple as possible - a page title. More likely, what you would be doing here is setting up sets of replicable content for your pages, such as products, locations, etc, and looping through a data set to create a `collection`. Collections are not covered in this repo.
* `homeTemplate.js` - this is an underscore template. It receives an object based on model data, and renders the proper content in the proper place within the template. In this case, just the page title in an h1 tag.
* in `homeView.js` we must first  pre-render our template without any data: `var compiledTemplate = _.template(homeTemplate)`. Once that is done, we can pass the data from our model to the template, and render it to the `$('#page')`
* all pages are given their own folder in the `views, templates, models, and collections` folders. Any scripts related to those pages can be grouped together so long as they serve the same  functionality (model, collection, view, etc). In doing so we keep the necessary separation between data and display

### STYLESHEET STRUCTURE

* Our task runner, `gulp` is responsible for compiling the main.scss file into a main.css file, which we use in our `index.html` file.
* The `main.scss` file imports all other relevant stylesheet files. We have organized them into three categories: `modules, partials, and vendor`.
* `modules` contains all of our SASS variables and mixins - things that don't actually render css.
* `partials` contains the different components of your site. It could be arranged by region (for example, footer, header, sidebar, etc), or by functionality (typography, colors, buttons, etc).
* `vendor` - contains stylesheets that you must include as necessary by any third party libraries you install. For example, if you were to include jQuery UI, and it has a default CSS file for how to display a slider. You should try not to modify any of the CSS here, but rather override it in your own partials. Also, if you are including any CSS in this directory, it should be CSS files, not SASS, so you should make sure to add a link to it in the `index.html` file, before your own stylesheets.


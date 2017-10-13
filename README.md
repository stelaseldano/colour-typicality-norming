# Colour Typicality Norming Experiment

## Cloning and running the project

This project uses the following dependencies:

* [jQuery][1]
* [Mustache templates][2]


After cloning the repo, run `npm install` from the main directory to install the dependencies. Npm is a package manager for JS. If you do not have it installed on your machine, you can follow the instructions on [their website][3].


You also need Python3 for running the [fresco][4] server] that collects the data. Do something like:

1) create virtual environment: `virtualenv meta/venv -p /usr/bin/python3`

This creates a python virtual env in meta/.
If you don't have `virtualenv` installed, do `[sudo] pip install virtualenv` or check [this link][5].

2) activate it: `source meta/venv/bin/activate`

3) install the packages: `pip install -r requirements.txt`

4) run `gunicorn server:app --reload --pid=gunicorn.pid`

5) in a separate terminal: `watchmedo shell-command --patterns="*.html;*.css;*.js" --recursive  --command='echo "${watch_src_path}" && kill -HUP `cat gunicorn.pid`' .`


After installing the dependencies, open `index.html` in the browser to see the experiment. The changes made to the html, css and js of the experiment can be seen when the page is refreshed.


## Experiment structure

**/index.html** - the html of slides is here in separate script tags.

**/css/style.css** - some styles that make the experiment prettier

**/js/*** - JavaScript files

**/images/** - images used in the experiment


[1]: https://jquery.com/ "jQuery"
[2]: https://github.com/janl/mustache.js "Mustache"
[3]: https://www.npmjs.com/ "npm"
[4]: https://ollycope.com/software/fresco/latest/
[5]: https://virtualenv.pypa.io/en/latest/installation/

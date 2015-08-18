Requirejs base structure
==================================

> This is just workflow structure for my base workflow.

### Folder Structure
```
src
├── app/
│   ├── build/
│   │   ├── app.build.js
│   │   ├── build.sh
│   ├── css/
│       ├── models/
│       ├── styles.css
│   ├── images/
│   └── js/
│       ├── libs/
│       ├── models/
│       ├── views/
│       └── app.js
├── dist/ ----------------------------------------- (after build)
├── Gruntfiles.js
├── package.json

```



### Usage:

#### 1. build js/css/html

> in terminal run:

```
sudo chmod +x app/build/build.sh
app/build/build.sh
```

#### 2. Gulp:

##### install gulp:
https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

##### Gulp connect(livereload):
$ npm install --save-dev gulp-connect

ps: sometimes the livereload function not working correctly until you restart.

##### Gulp autoprefixer:
$ npm install --save-dev gulp-autoprefixer

##### Gulp run
$ gulp
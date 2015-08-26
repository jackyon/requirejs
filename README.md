Requirejs base structure
==================================

> This is just the structure for my base workflow. Still updading...

### Folder Structure
```
src
├── app/
│   ├── build/
│   │   ├── app.build.js
│   │   ├── build.sh
│   ├── css/
│       ├── models/
│       ├── views/
│       ├── plugins/
│       ├── styles.css
│   ├── images/
│   ├── fonts/
│   └── js/
│       ├── libs/
│       ├── models/
│       ├── views/
│       ├── plugins/
│       └── app.js
├── dist/ ----------------------------------------- (after build)
├── node_modules ---------------------------------- (after install gulp)
├── gulpfile.js

```



### Usage:

#### 1. Requirejs: build js/css/html

> in terminal run:

```
sudo chmod +x app/build/build.sh
build/build.sh
```
(run the "build/build.sh" in app folder)

#### 2. Gulp:

##### (1) install gulp:
https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

##### (2) Gulp Browsersync:
```
$ sudo npm install browser-sync gulp --save-dev
```

#### Gulp run
```
$ gulp
```
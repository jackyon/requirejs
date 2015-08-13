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

#### 2. Grunt:

##### grunt imagemin ()
This plugin requires Grunt >=0.4.0

If you haven't used Grunt before, be sure to check out the Getting Started guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-contrib-imagemin --save-dev
grunt imagemin
```
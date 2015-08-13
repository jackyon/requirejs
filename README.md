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

##### grunt imagemin

###### new install
(1)nodejs
(2)npm install -g grunt-cli
(3)create package.json Gruntfile to your app folder
(4)npm install grunt-contrib-imagemin --save-dev
(5)Modify path of setting file "Gruntfile.js"
(6)grunt imagemin

###### use
(1)npm install grunt-contrib-imagemin --save-dev
(2)grunt imagemin
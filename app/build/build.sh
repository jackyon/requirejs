r.js -o build/app.build.js
cd ../dist
mv js/libs/requirejs/require.js require.js
rm -rf js/libs/* build js/views js/models js/collections js/plugins/ build.txt test
mkdir js/libs/requirejs && mv require.js js/libs/requirejs/require.js
# mv css/styles.css styles.css && rm -rf css/* && mv styles.css css/styles.css
/* =============================================================
 *  single page application
 * ============================================================ */
({
  appDir: "../",
  baseUrl: "js",
  dir: "../../dist",
  name: 'app',
  findNestedDependencies: true,  //enable for nested require calls
  preserveLicenseComments: false, //remove comments
  mainConfigFile: '../js/common.js',
  optimizeCss: 'standard'
})



/* =============================================================
 *  Multilpage application
 * ============================================================ */
// ({
//   appDir: '../',
//   baseUrl: 'js',
//   mainConfigFile: '../js/common.js',
//   dir: '../../dist',
//   findNestedDependencies: true,  //enable for nested require calls
//   preserveLicenseComments: false, //remove comments
//   // optimize: 'none',
//   modules: [
//     // First set up the common build layer.
//     {
//       // module names are relative to baseUrl
//       name: 'common',
//       // List common dependencies here. Only need to list
//       // top level dependencies, 'include' will find
//       // nested dependencies.
//       include: [
//         'jquery',
//         'unveil'
//       ]
//     },

//     // Now set up a build layer for each main layer, but exclude
//     // the common one. If you're excluding a module, the excludee
//     // must appear before the excluder in this file. Otherwise it will
//     // get confused.
//     {
//       name: 'views/home',
//       exclude: ['common']
//     }

//     // {
//     //   name: 'app/main-contact',
//     //   exclude: ['common']
//     // }
//   ]
// })
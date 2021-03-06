/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/bower/angular/angular.js",
		"vendor/bower/jquery/dist/jquery.js",
		"vendor/bower/bootstrap/dist/js/bootstrap.js",
		"vendor/bower/angular-bootstrap/ui-bootstrap.js",
        "vendor/bower/angular-ui-router/release/angular-ui-router.js",
        "vendor/bower/angular-resource/angular-resource.js",
        "vendor/bower/lodash/dist/lodash.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    },

    less: {
      compile: {
        options: {
          paths: ["vendor/css/normalize.css", "vendor/css/**/*.css", "app/css/**/*.less"]
        }
      }
    }
  };
};

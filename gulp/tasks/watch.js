
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');
var watchify = require('watchify');

gulp.task('watch', ['setWatch','nodemon','build'], function() {
  gulp.watch(config.markup.src, ['markup','sass']);
});

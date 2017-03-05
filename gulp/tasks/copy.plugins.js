'use strict';

module.exports = function() {
  $.gulp.task('copy:plugins', function() {
    return $.gulp.src('./src/js/plugins/*.js', { since: $.gulp.lastRun('copy:plugins') })
      .pipe($.gulp.dest($.config.root + '/assets/js/plugins'));
  });
};

var gulp = require('gulp');
var gulpfile = require('electron-windows-installer');

gulp.task('default', function(done) {
    gulpfile({
        appDirectory: './logarcade-win32-ia32/',
        outputDirectory: './release',
        arch: 'ia32',
        authors: 'Xebia France',
    }).then(done).catch(done);
});
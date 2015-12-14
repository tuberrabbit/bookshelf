var gulp = require('gulp')
var browserSync = require('browser-sync').create()

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    })
    gulp.watch('src/**', browserSync.reload)
})

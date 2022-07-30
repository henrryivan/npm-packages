import gulp from 'gulp';
import image from 'gulp-image';

gulp.task('image', (done) => {
  gulp.src('./assets/img/**/*')
    .pipe(image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      jpegRecompress: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('./out/img'));
  done();
});

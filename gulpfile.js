
const gulp = require('gulp')
const header = require('gulp-header')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const pkg = require('./package')

gulp.task('test', () => {
  gulp.src(['./the-style.scss'])
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss())
    .pipe(header(banner(), { pkg }))
    .pipe(gulp.dest('./'))
    .on('end', () => {
      return
    })
})

function banner () {
  return '/*! The Style.css Libs v<%= pkg.version %>*/'
}
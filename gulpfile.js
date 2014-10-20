//http://www.mikestreety.co.uk/blog/a-simple-sass-compilation-gulpfilejs
//http://www.mikestreety.co.uk/blog/an-advanced-gulpjs-file

var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {

    styles: {
        src: './app/styles/',
        files: './app/styles/main.scss',
        dest: './app/styles/'
    }

}

var displayError = function(error) {

    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;
    console.error(errorString);
}

gulp.task('sass', function (){

    gulp.src(paths.styles.files)
    // Sass options - make the output compressed and add the source map
    // Also pull the include path from the paths object
    .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        includePaths : [paths.styles.src]
    }))
    // If there is an error, don't stop compiling but use the custom displayError function
    .on('error', function(err){
        displayError(err);
    })
    // Finally put the compiled sass into a css file
    .pipe(gulp.dest(paths.styles.dest))
});

gulp.task('default', ['sass'],function() {
  gulp.watch(paths.styles.files, ['sass']);
});


// Dependencies
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

// Place Code for tasks here
// ---- images ---
gulp.task("imagemin", function () {
	return gulp
		.src("./public/assets/images/*.{svg}")
		.pipe(
			imagemin([
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
			])
		)
		.pipe(gulp.dest("./public/assets/images/"));
});

// ---- SCSS  ----

// dev
gulp.task("compile:css", function () {
	return gulp
		.src("./src/assets/scss/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", ">5%"],
				cascade: false,
			})
		)
		.pipe(sourcemaps.write({ includeContent: true, sourceRoot: "." })) // use inline sourcemaps to avoid the need of deleting them - when using the build parameter
		.pipe(gulp.dest("./public/assets/css"));
});

// build
gulp.task("build:css", function () {
	return gulp
		.src("./src/assets/scss/**/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", ">5%"],
				cascade: false,
			})
		)
		.pipe(gulp.dest("./public/assets/css"));
});

// ---- Javascript ----

// dev
gulp.task("compile:js", function () {
	var options = {
		mangle: "false",
	};

	return gulp
		.src("./src/assets/js/*.js")
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write({ includeContent: true, sourceRoot: "." })) // use inline sourcemaps to avoid the need of deleting them - when using the build parameter
		.pipe(gulp.dest("./public/assets/js"));
});

// build
gulp.task("build:js", function () {
	var options = {
		mangle: "true",
	};

	return gulp
		.src("./src/assets/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("./public/assets/js"));
});

// --- build ----
gulp.task("build", gulp.series("build:css", "build:js", "imagemin"));

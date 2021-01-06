/* #### Setting #### */
const config = require("./_config.json");
const gulp = require("gulp");
const sass = require("gulp-sass");
const gulpStylelint = require("gulp-stylelint");
const autoprefixer = require("gulp-autoprefixer");
const purgecss = require("gulp-purgecss");
const critical = require("critical").stream;

/* ################# */
/* ##### Tasks ##### */
/* ################# */
gulp.task("compile:css", function () {
	return gulp
		.src(config.assetSrc + "/scss/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions", ">5%"],
				cascade: false,
			})
		)
		.pipe(gulp.dest(config.assetDist + "/css"));
});

// lint
gulp.task("lint:css", function () {
	return gulp.src(config.assetSrc + "/scss/**/*.scss").pipe(
		gulpStylelint({
			fix: true,
			reporters: [{ formatter: "string", console: true }],
		})
	);
});

// purge
gulp.task("purge:css", function () {
	return gulp
		.src(config.assetDist + "/css/*.css")
		.pipe(
			purgecss({
				content: [config.dist + "/*.html"],
			})
		)
		.pipe(gulp.dest(config.assetDist + "/css"));
});

// critical css
gulp.task("critical:css", () => {
	return gulp
		.src(config.dist + "/**/*.html")
		.pipe(
			critical({
				base: config.dist,
				inline: true,
				css: [config.assetDist + "/css/" + config.distCssSite],
				penthouse: {
					timeout: 60000,
					pageLoadSkipTimeout: 30000,
				},
			})
		)
		.pipe(gulp.dest(config.dist));
});

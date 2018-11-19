// 引入使用的模块
const gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"), // 压缩CSS
	babel = require("gulp-babel"), // babel：将ES6转换ES5
	uglify = require("gulp-uglify"), // 压缩JS
	connect = require("gulp-connect"), // webserver
    sass = require("gulp-sass");
    
gulp.task("html", function(){
	gulp.src("src/**/*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
// 定制任务：压缩CSS
gulp.task("css", function() {
	gulp.src("src/css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());
});
// 定制任务：压缩JS
gulp.task('js', () => {
    gulp.src('src/js/*.js')
        .pipe(babel({ // 转换
            presets: ['env']
        }))
        .pipe(uglify()) // 压缩
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

// 定制任务：启动webserver服务器
gulp.task("conn", function(){ 
	connect.server({
		port : "1212",
		root : "dist", // webserver的根目录
		livereload : true // 是否自动刷新浏览器
	});
});
// 定制任务：编译sass
gulp.task("sass", function() {
	gulp.src("src/scss/*.scss")
		.pipe(sass({outputStyle: "expanded"}))
		.pipe(gulp.dest("dist/scss"))
});
gulp.task("libs", function(){
	gulp.src("src/lib/**/*.*")
	.pipe(gulp.dest("dist/lib"))
})
// 定制任务：复制
gulp.task("copy-images", function() {
	gulp.src("src/img/**/*.*")
		.pipe(gulp.dest("dist/img"));
})

// 定制任务：监视文件的修改
gulp.task("watch", function() {
	gulp.watch("src/index.html", ["html"]);
	gulp.watch("src/css/*.css", ["css"]);
	gulp.watch("src/js/*.js", ["js"]);
	gulp.watch("src/scss/*.scss", ["sass"]);
});

// 定制任务：默认
gulp.task("default", ["css", "js", "html", "copy-images", "conn", "watch","sass","libs"]);

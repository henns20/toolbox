help[$.taskListing]
default[help]
vet
styles[clean-styles]
fonts[clean-fonts]
images[clean images]
less watcher
build[optimize, images]
optimize[wiredep, test]
wiredep[templateCache]
inject[wiredep, styles]
templatecache[clean]
clean
clean code
clean images
clean the fonts
clean styles
bump
serve build[build]
serve dev
test[vet, templatecache]
autotest[vet, templatecache]

helper functions
serve
change event
notify
start browser sink
start tests
karma completed
log
clean

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var _ = require('lodash');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var del = require('del');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT  || config.defaultPort;
var wiredep = require('gulp-wiredep');


// TODO: css tasks
// TODO: Add taskinject (wiredep(includes custom js inject(my html-inject)), styles) NOTE: wiredep used for bowerrc(see bowerrc file for command) functionality - so it does not recompile css everytime - so inject and wiredep are tasks both have purposes.
// TODO: tasks clean styles, less watcher,
// NOTE: use a log statement on top of each task.
// NOTE: (after nodemon working) next is to: 1.launch browser too, 2.the start on server & CLIENT code changes(as of now it's on node changes) using BROWSER SYNC(uses socket io)

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default',['help']);


 /*****
  * First Stage Dev & Serve Dev
  * Before Opitmized Build
  * NOTE: some subtasks used in build
  *****/

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 *    gulp test --startServers
 * @return {Stream}
 */
gulp.task('test', ['vet', 'templatecache'],  function () {
    startTests(true /* singleRun */, done);
});

/**
 * Run specs and wait.
 * Watch for file changes and re-run tests on each change
 * To start servers and run midway specs as well:
 *    gulp autotest --startServers
 */
gulp.task('autotest', ['vet', 'templatecache'],  function () {
    startTests(false /* singleRun */, done);
});

/**
 * vet the code and create coverage report
 * @return {Stream}
 */
gulp.task('vet', function () {
  log('Analyzing source with JSHint and JSCS');

  return gulp
    .src(config.alljs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'));

});

/**
 * serve the dev environment
 * --nosync TODO: need to confirm this works & fix inject
 */
gulp.task('serve-dev', ['inject'], function () {
  serve(true /* isDev */);
});

/**
 * jpappa note: wiredep has my html inject embedded in it
 * his inject - inject dependecy of wiredep and styles (separates out the 2)
 * bc compiling the css may take a while
 * NOTE: I included css here because I didn't have a less compiler needed
 */
/**
 * Wire-up/inject the bower dependencies & js & css
 * @return {Stream}
 */
gulp.task('wiredep', function () {
  log('Wire up the bower css js and our app js into the html');

  var options = config.getWiredepDefaultOptions();

  return gulp
    .src(config.index)
    .pipe(wiredep(options))
    .pipe($.inject(gulp.src(config.js)))
    .pipe($.inject(gulp.src(config.css)))
    .pipe(gulp.dest(config.client));
});


/**
 *
 *  css : config.temp + 'styles.css' - so if using less need to change the config directory.
 *  NOTE: Meant to inject less css after the compiling(in this case just
 * my standard so should have styles & fonts css)
 */
 gulp.task('inject', ['wiredep', 'templatecache'], function () {
     log('Wire up the app css into the html, and call wiredep ');

     return gulp
       .src(config.index)
       .pipe($.inject(gulp.src(config.css)))
       .pipe(gulp.dest(config.client));
 });

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', ['clean-code'], function () {
  log('Creating an AngularJS $templateCache');

  return gulp
    .src(config.htmltemplates)
    .pipe($.minifyHtml({empty: true}))
    .pipe($.angularTemplatecache(
        config.templateCache.file,
        config.templateCache.options
    ))
    .pipe(gulp.dest(config.tmp));
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', ['clean-images'], function () {
  log('Copying and compressing the images');

  return gulp
    .src(config.images)
    .pipe($.imagemin({optimizationLevel: 4}))
    .pipe(gulp.dest(config.build + 'assets/images'));
});

// gulp.task('styles', ['clean-styles'], function() {
// gulp.task('fonts', ['clean-fonts'], function() {

gulp.task('less-watcher', function() {
    gulp.watch([config.less], ['styles']);
});


/**
 * Compile less to css
 * @return {Stream}
 */
// gulp.task('styles', ['clean-styles'], function() {
//     log('Compiling Less --> CSS');
//
//     return gulp
//         .src(config.less)
//         .pipe($.plumber()) // exit gracefully if something fails after this
//         .pipe($.less())
// //        .on('error', errorLogger) // more verbose and dupe output. requires emit.
//         .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
//         .pipe(gulp.dest(config.temp));
// });

/**
 * Copy fonts
 * @return {Stream}
 */
// gulp.task('fonts', ['clean-fonts'], function() {
//     log('Copying fonts');
//
//     return gulp
//         .src(config.fonts)
//         .pipe(gulp.dest(config.build + 'fonts'));
// });

/**
 * Remove all js and html from the build and temp folders
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-code', function () {

  var deleteConfig = [].concat(
      config.tmp,
      config.build + 'js',
      config.build + 'css'
    );
  log('Cleaning: ' + $.util.colors.blue(deleteConfig));
  del(deleteConfig).then(log('Done'));
});


// TODO: do each fur fonts & styles
gulp.task('clean-images', function () {
  clean(config.build + 'images/**/*.*');
});

/**
 * Remove all fonts from the build folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-fonts', function(done) {
    clean(config.build + 'fonts/**/*.*', done);
});

/**
 * Remove all styles from the build and temp folders
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-styles', function(done) {
    var files = [].concat(
        config.temp + '**/*.css',
        config.build + 'styles/**/*.css'
    );
    clean(files, done);
});


  /*****
   * Second Stage: Build & Server Build
   *****/


/**
* Remove all files from the build, temp, and reports folders
* Clean images as well. Don't need all the time.
* @param  {Function} done - callback when complete
*/
gulp.task('clean', function () {
   var delconfig = [].concat(config.build, config.temp);
   log('Cleaning: ' + $.util.colors.yellow(delconfig));
   del(delconfig).then(log('Done'));
});

/**
* serve the build environment
* --nosync
*/
gulp.task('serve-build', ['build'], function () {
 serve(false /* isDev */);
});

/**
 * Build everything
 * This is separate so we can run tests on
 * optimize before handling image or fonts
 */
gulp.task('build', ['optimize', 'images'], function () {
  log('Building everything');

  var msg = {
    title: 'gulp build',
    subtitle: 'Deployed to the build folder',
    message: 'Running `gulp serve-build`'
  };
  del(config.tmp);
  log(msg);
  notify(msg);

});

/**
 * Optimize all files, move to a build folder,
 * and inject them into the new index.html
 * @return {Stream}
 */
gulp.task('optimize', ['wiredep', 'test'], function () {
  log('Optimizing the javascript, css, html');
  log('templateCache');

  var assets = $.useref({searchPath: './'});
  var cssFilter = $.filter(['**/*.css'], {restore: true});
  var jsLibFilter = $.filter(['**/' + config.optimized.lib], {restore: true});
  var jsAppFilter = $.filter(['**/' + config.optimized.app], {restore: true});
  var templateCache = config.tmp + config.templateCache.file;

  return gulp
    .src(config.index)
    .pipe($.plumber())
    .pipe($.inject(gulp.src(templateCache, {read: false}), {
      starttag: '<!-- inject:templates:js -->'
    }))
    .pipe(assets)
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore)
    .pipe(jsLibFilter)
    .pipe($.uglify())
    .pipe(jsLibFilter.restore)
    .pipe(jsAppFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(jsAppFilter.restore)
     // modify everything but html: cache busting
    .pipe($.if('!*.html', $.rev()))
    .pipe($.revReplace())
    .pipe(gulp.dest(config.build))
    .pipe($.rev.manifest())
    .pipe(gulp.dest(config.build));
});





/**
 * Bump the version
 * --type=pre will bump pre-release version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will minor will bump the minor version *.x.*
 * --type=major will bump the major version version x.*.*
 * --version=1.2.3 will bump the specific version and ignore the other flags
 */

gulp.task('bump', function () {
  var msg = 'Bumping versions';
  var type = args.type;
  var version = args.version;
  var options = {};
  if (version) {
    options.version = version;
    msg += ' to ' + version;
  } else {
    options.type = type;
    msg += ' for a ' + type;
  }
  log(msg);

  return gulp
    .src(config.packages)
    .pipe($.print())
    .pipe($.bump(options))
    .pipe(gulp.dest(config.root));

});





//////////


function serve(isDev) {
  var nodeOptions = {
    script: config.nodeServer,
    delayTime: 1,
    env: {
      'PORT': port,
      'NODE_ENV': isDev ? 'dev' : 'build'
    },
    watch: [config.server] // TODO define the files restart on
  };
// NOTE: nodemon watches server files browser sink watches client files
  return $.nodemon(nodeOptions)
    // Jon Papa offers the idea of option to add a dependency gulp task to an event like vet so restart also vets
    // .on('restart', ['vet'] function (ev) {
    .on('restart', function (ev) {
      log('*** nodemon restarted');
      log('files changed on restart:\n' + ev);
      // setTimeout()  Connecting browser sync and nodemon part of tut Keeping Your Browser in Sync Main sub
      // this works when app.js is changed not client files
        setTimeout(function () {
          browserSync.notify('reloading now...');
          browserSync.reload({stream: false});
        }, config.browserReloadDelay);
    })
    .on('start', function () {
      log('*** nodemon started');
      startBrowserSync(isDev);
    })
    .on('crash', function () {
      log('*** nodemon crashed: script crashed for some reason');
    })
    .on('exit', function () {
      log('*** nodemon exited cleanly');
    });
}


function changeEvent(event) {
  var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
  log('File' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function notify(options) {
  var notifier = require('node-notifier');
  var notifyOptions = {
    sound: 'Bottle',
    contentImage: path.join(__dirname, 'gulp.png'),
    icon: path.join(__dirname, 'gulp.png')
  };
  _.assign(notifyOptions, options);
  notifier.notify(notifyOptions);
}

function startBrowserSync(isDev) {
  if (args.nosync || browserSync.active) {
      return;
  }
  log('Starting browser sync on port ' + port);


    /**
     * Keeping You Browser in Sync: Injecting Css From Less: part of tut
     *  Put gulp.watch the one that is wrapped by less-watcher here  (not the whole task)
     *
     */
    //  NOTE: reason for distinction in bev mode  don't need to optimize and build or serve build mode  will need to optimize files before reloading browser
    // if(isDev) {


    /***
     *  THIS WORKS WIN TANDOM WITH WATCHING THE CSS FILES IN THE OPTIONS*******
     ****/
    //   gulp.watch([config.less], ['styles'])
    //   .on('change', function (event) {
    //     changeEvent(event);
    //   });
    // }
    //
   /***
    * THIS HANDLES IT ALL in a build environment
    ****/

    // else {
    //  gulp.watch([config.js, config.css, config.html], ['optimize', browserSync.reload ])
    //   .on('change', function (event) {
    //     changeEvent(event);
    //   });
    // }


    if (!isDev) {
      gulp.watch([config.js, config.css, config.htmltemplates], ['optimize', browserSync.reload ])
        .on('change', function (event) {
          changeEvent(event);
        });
      }


    var options = {
      proxy: 'localhost:' + port,
      port: 3000,
      files: isDev ? [config.client + '**/**/*.*'] : [], // NOTE: config.files with css(temp after compile)
      // '!' + config.less
      // config.temp + '**/*.css'
      ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
      },
      injectChanges: true, // if css change it will try to inject rather then full reload
      logFileChanges: true,
      logLevel: 'debug',
      logPrefix: 'gulp-patterns',
      notify: true,
      reloadDelay: 0 // 1000
    };

   browserSync(options);
}

function startTests(singleRun, done) {
  var karma = require('karma').server;
  var excludeFiles = [];
  var serverSpecs = config.serverIntegrationSpecs;

  excludeFiles = serverSpecs;
  // TODO: warning message with karma in serve-build
  // WARN `start` method is deprecated since 0.13. It will be removed in 0.14. Please use
  //   server = new Server(config, [done])
  //   server.start()
  // instead.
  //   // TODO: warning message with karma in serve-build
    // WARN `start` method is deprecated since 0.13. It will be removed in 0.14. Please use
    //   server = new Server(config, [done])
    //   server.start()
    // instead.
    // http://karma-runner.github.io/0.13/dev/public-api.html

  karma.start({
    configFile:  __dirname + '/karma.conf.js', // TODO: how is __dirname recognized
    exclude: excludeFiles,
    singleRun: !!singleRun

  }, karmaCompleted);

  function karmaCompleted(karmaResult) {
      log('Karma completed!');
      if (karmaResult === 1) {
        done('karma: tests failed with code ' + karmaResult);
      } else {
          done();
      }
  }

}

  /**
 * John Papa convention to separate out logs & other utilities
 */

/**
 * Logs things to gulp processing
 */

function log(msg) {
	if(typeof(msg) === 'object') {
		for(var item in msg) {
			if(msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}

function done(x) {
  log('x');
  log('done');
}


function clean(path) {
	log('Cleaning: ' + $.util.colors.blue(path));
	del(path);
}

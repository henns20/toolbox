module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/';
  var root = './';
  var report = './report/';
  var server = './src/server/';
  var source = './src/';
  var tmp = './tmp/';
  var wiredep = require('wiredep');
  var bowerFiles = wiredep({devDependencies: true})['js']; //cannot be alphabetized because it needs wiredep

    var config = {

      /**
       * File Paths
       */
      index: client + 'index.html',
      // NOTE: files for testing
      alljs: [
        '!./gulpfile.md.js',
        './src/**/*.js',
        './src/**/**/*.js',
        './*.js'
      ],
      build: './build/',
      client: client,
      css: [
        client + 'css/*.css' //NOTE: normally styles.less
      ],
      htmltemplates: [
        clientApp + '**/**/*.html',
        clientApp + '**/*.html',
        clientApp + '*.html'
      ],
      images: [
        client + 'images/*.*',
        client + 'images/**/*.*'
      ],
      js: [
        client + 'plugins/*.js',
        clientApp + '*.module.js',
        '!' + clientApp + '*.spec.js',
        clientApp + '**/*.module.js',
        '!' + clientApp + '**/*.spec.js',
        '!' + clientApp + '**/*.spec-*.js',
        clientApp + '**/*.js'
      ],

      /**
       * optimize files
       */
      optimized: {
        app: 'app.js',
        lib: 'lib.js'
      },
      pdfs: [
        client + 'pdfs/*.*',
        client + 'pdfs/**/*'
      ],
      report: report,
      root: root,
      templateCache: {
        file: 'templates.js',
        options: {
          module: 'ivApp',
          standAlone: false,
          root: 'app/'
        }
      },
      server: server,
      source: source, // i think this is right above
      tmp: tmp,
      /**
       * Bower & npm locations
       */
       bower: {
         json: require('./bower.json'),
         directory: './bower_components/',
         ignorePath: '../..'
       },
       packages: [
         './package.json'
        //  './bower.json' optional
      ],

      /**
       * browsersync
       */
       browserReloadDelay: 1000,

       /**
        *  Karma settings
        */
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js'],
        specHelpers: [client + 'test-helpers/*.js'],

       /**
        * Node Settings
        */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'

  }; // ends config object

  config.getWiredepDefaultOptions = function () {
      var options = {
        bowerJson: config.bower.json,
        directory: config.bower.directory,
        ignorePath: config.bower.ignorePath
      };
      return options;
  };

  config.karma = getKarmaOptions();

  return config;

  //////////

  function getKarmaOptions() {
      var options = {
        files: [].concat(
          bowerFiles,
          config.specHelpers,
          client + '**/*.module.js',
          client + '**/**/*.module.js',
          client + '**/*.js',
          client + '**/**/*.js',
          tmp + config.templateCache.file,
          config.serverIntegrationSpecs
        ),
        exclude: [],
        coverage: {
          dir: report + 'coverage',
          reporters: [
            {type: 'html', subdir: 'report-html'},
            {type: 'lcov', subdir: 'report-lcov'},
            {type: 'text-summary'}
          ]
        },
        preprocessors: {}
      };

      options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
      return options;
  }

}; // ends module experts

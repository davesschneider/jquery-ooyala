// Karma configuration
// Generated on Wed May 21 2014 14:29:32 GMT-0400 (EDT)


module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: "",


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ["jasmine"],


		// list of files / patterns to load in the browser
		files: [
			// 3rd-party libs
			"bower_components/jquery/jquery.js",
			"bower_components/jasmine-jquery/jasmine-jquery.js",
			// source files
			"src/**/*.js",
			// fixtures/helpers
			"test/fixtures/**/*.html",
			"test/spec_helper.js",
			// the tests themselves
			"test/**/*.spec.js"
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"src/**/*.js": ["coverage"]
		},


		// test results reporter to use
		// possible values: "dots", "progress"
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ["progress", "coverage", "threshold"],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		thresholdReporter: {
			statements: 100,
			branches: 100,
			functions: 100,
			lines: 100
		}
	});
};

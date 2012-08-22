
	seajs.config({
		alias: {
			'$': 'http://localhost:8080/assets/js/lib/seajs-modules/jquery/1.7.2/jquery.js',
		    'jquery': 'http://localhost:8080/assets/js/lib/seajs-modules/jquery/1.7.2/jquery.js',
	        'underscore': 'http://localhost:8080/assets/js/lib/seajs-modules/underscore/1.3.3/underscore.js',
		    'backbone': 'http://localhost:8080/assets/js/lib/seajs-modules/backbone/0.9.2/backbone.js',
		    'handlebars': 'http://localhost:8080/assets/js/lib/seajs-modules/backbone/1.0.0/handlebars.js',
		    'coffee': 'http://localhost:8080/assets/js/lib/seajs-modules/coffee/1.3.3/coffee-script.js',
		    'less': 'http://localhost:8080/assets/js/lib/seajs-modules/less/1.3.0/less.js',
		    'jqm': 'http://localhost:8080/assets/js/lib/seajs-modules/jquerymobile/jquery.mobile-1.1.0.min.js',
		    
		    
		    'tbs': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap.js',
		    'tbs-alert': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-alert.js',
		    'tbs-carousel': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-carousel.js',
		    'tbs-collapse': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-collapse.js',
		    'tbs-dropdown': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-dropdown.js',
		    'tbs-modal': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-modal.js',
		    'tbs-popover': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-popover.js',
		    'tbs-scrollspy': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-scrollspy.js',
		    'tbs-tab': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-tab.js',
		    'tbs-tooltip': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-tooltip.js',
		    'tbs-transition': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-transition.js',
		    'tbs-typeahead': 'http://localhost:8080/assets/js/lib/seajs-modules/bootstrap/bootstrap-typeahead.js',
		    
		    'baseurl': 'http://localhost:8080/assets/'
		},
		
		preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],
		debug: 0
		
	});
	

	
	seajs.use('baseurl/js/init');
	
/*
	seajs.use('tbs');
	seajs.use('tbs-alert');
	seajs.use('tbs-carousel');
	seajs.use('tbs-collapse');
	seajs.use('tbs-dropdown');
	seajs.use('tbs-modal');
	seajs.use('tbs-popover');
	seajs.use('tbs-scrollspy');
	seajs.use('tbs-tab');
	seajs.use('tbs-tooltip');
	seajs.use('tbs-transition');
	seajs.use('tbs-typeahead');	
*/
	

	
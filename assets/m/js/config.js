define(function(require) {	


	seajs.config({
		alias: {
			'$': 'http://localhost:8080/assets/m/js/lib/seajs-modules/jquery/1.7.2/jquery.js',
		    'jquery': 'http://localhost:8080/assets/m/js/lib/seajs-modules/jquery/1.7.2/jquery.js',
	        'underscore': 'http://localhost:8080/assets/m/js/lib/seajs-modules/underscore/1.3.3/underscore.js',
		    'backbone': 'http://localhost:8080/assets/m/js/lib/seajs-modules/backbone/0.9.2/backbone.js',
		    'handlebars': 'http://localhost:8080/assets/m/js/lib/seajs-modules/backbone/1.0.0/handlebars.js',
		    'coffee': 'http://localhost:8080/assets/m/js/lib/seajs-modules/coffee/1.3.3/coffee-script.js',
		    'less': 'http://localhost:8080/assets/m/js/lib/seajs-modules/less/1.3.0/less.js',
		    'jqm': 'http://localhost:8080/assets/m/js/lib/seajs-modules/jquerymobile/jquery.mobile-1.1.0.min.js',
		    
		    'baseurl': 'http://localhost:8080/assets/m/'
		},
		
		preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],
		debug: 0
		
	});
	
	
	seajs.use('baseurl/js/init');
	
	
});
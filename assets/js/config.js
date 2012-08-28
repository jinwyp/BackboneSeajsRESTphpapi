
seajs.config({
	alias: {
		'$': 'http://localhost:8080/assets/js/seajs-modules/jquery/1.7.2/jquery.js',
	    'jquery': 'http://localhost:8080/assets/js/seajs-modules/jquery/1.7.2/jquery.js',
        'underscore': 'http://localhost:8080/assets/js/seajs-modules/underscore/1.3.3/underscore.js',
	    'backbone': 'http://localhost:8080/assets/js/seajs-modules/backbone/0.9.2/backbone.js',
	    'backbonemodelbinder': 'http://localhost:8080/assets/js/seajs-modules/backbonemodelbinder/backbone.modelbinder.js',
	    'handlebars': 'http://localhost:8080/assets/js/seajs-modules/handlebars/1.0.0/handlebars.js',
	    'coffee': 'http://localhost:8080/assets/js/seajs-modules/coffee/1.3.3/coffee-script.js',
	    'less': 'http://localhost:8080/assets/js/seajs-modules/less/1.3.0/less.js',
	    'jqm': 'http://localhost:8080/assets/js/seajs-modules/jquerymobile/jquery.mobile-1.1.0.min.js',
	    
	    
	    'tbs-affix': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-affix.js',
	    'tbs-alert': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-alert.js',
	    'tbs-button': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-button.js',
	    'tbs-carousel': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-carousel.js',
	    'tbs-collapse': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-collapse.js',
	    'tbs-dropdown': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-dropdown.js',
	    'tbs-modal': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-modal.js',
	    'tbs-popover': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-popover.js',
	    'tbs-scrollspy': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-scrollspy.js',
	    'tbs-tab': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-tab.js',
	    'tbs-tooltip': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-tooltip.js',
	    'tbs-transition': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-transition.js',
	    'tbs-typeahead': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap-typeahead.js',
	    
	    'baseurl': 'http://localhost:8080/assets/',
	    'template-webmanagement': 'http://localhost:8080/assets/website/templates-webadmin',
	    'template-website': 'http://localhost:8080/assets/website/templates-website',
	    'template-mobile': 'http://localhost:8080/assets/mobile/templates'
	},
	
	preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],
	debug: 0
	
});


seajs.use('baseurl/js/init');


	

	

seajs.config({
	alias: {
		'$': 'assets/js/seajs-modules/jquery/1.7.2/jquery.js',
	    'jquery': 'assets/js/seajs-modules/jquery/1.7.2/jquery.js',
        'underscore': 'assets/js/seajs-modules/underscore/1.3.3/underscore.js',
	    'backbone': 'assets/js/seajs-modules/backbone/0.9.2/backbone.js',
	    'backbonemodelbinder': 'assets/js/seajs-modules/backbonemodelbinder/backbone.modelbinder.js',
	    'backbonevalidation': 'assets/js/seajs-modules/backbonevalidation/backbone-validation-amd.js',
	    'handlebars': 'http://localhost:8080/assets/js/seajs-modules/handlebars/1.0.0/handlebars.js',
	    'coffee': 'http://localhost:8080/assets/js/seajs-modules/coffee/1.3.3/coffee-script.js',
	    'less': 'http://localhost:8080/assets/js/seajs-modules/less/1.3.0/less.js',
	    'jqm': 'assets/js/seajs-modules/jquerymobile/jquery.mobile-1.1.0.min.js',
	    
	    'bootstrap': 'http://localhost:8080/assets/js/seajs-modules/bootstrap/bootstrap.js',	    
	    'tbs-affix': 'assets/js/seajs-modules/bootstrap/bootstrap-affix.js',
	    'tbs-alert': 'assets/js/seajs-modules/bootstrap/bootstrap-alert.js',
	    'tbs-button': 'assets/js/seajs-modules/bootstrap/bootstrap-button.js',
	    'tbs-carousel': 'assets/js/seajs-modules/bootstrap/bootstrap-carousel.js',
	    'tbs-collapse': 'assets/js/seajs-modules/bootstrap/bootstrap-collapse.js',
	    'tbs-dropdown': 'assets/js/seajs-modules/bootstrap/bootstrap-dropdown.js',
	    'tbs-modal': 'assets/js/seajs-modules/bootstrap/bootstrap-modal.js',
	    'tbs-popover': 'assets/js/seajs-modules/bootstrap/bootstrap-popover.js',
	    'tbs-scrollspy': 'assets/js/seajs-modules/bootstrap/bootstrap-scrollspy.js',
	    'tbs-tab': 'assets/js/seajs-modules/bootstrap/bootstrap-tab.js',
	    'tbs-tooltip': 'assets/js/seajs-modules/bootstrap/bootstrap-tooltip.js',
	    'tbs-transition': 'assets/js/seajs-modules/bootstrap/bootstrap-transition.js',
	    'tbs-typeahead': 'assets/js/seajs-modules/bootstrap/bootstrap-typeahead.js',
	    
	    
	    'template-webmanagement': 'assets/website/templates-webadmin',
	    'template-website': 'assets/website/templates-website',
	    'template-mobile': 'assets/mobile/templates',
		
		'baseurl': '/assets/'
	},
	
	preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],
	debug: 0
	
});


seajs.use('baseurl/js/initweb');	


	

	
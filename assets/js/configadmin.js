
seajs.config({
	alias: {
		'$': 'modules/jquery/1.7.2/jquery.js',
	    'jquery': 'modules/jquery/1.7.2/jquery.js',
	    'jqm': 'modules/jquerymobile/jquery.mobile-1.1.0.min.js',
	    
        'underscore': 'modules/underscore/1.3.3/underscore.js',
	    'backbone': 'modules/backbone/0.9.2/backbone.js',	    
	    
	    'backbonemodelbinder': 'modules/backbonemodelbinder/backbone-modelbinder.js',
	    'backbonevalidation': 'modules/backbonevalidation/backbone-validation-amd.js',	    
	    
	    'handlebars': 'modules/handlebars/1.0.0/handlebars.js',
	    'coffee': 'modules/coffee/1.3.3/coffee-script.js',
	    'less': 'modules/less/1.3.0/less.js',
	    
	    
	    'bootstrap': 'modules/bootstrap/bootstrap.js',	    
	    'tbs-affix': 'modules/bootstrap/bootstrap-affix.js',
	    'tbs-alert': 'modules/bootstrap/bootstrap-alert.js',
	    'tbs-button': 'modules/bootstrap/bootstrap-button.js',
	    'tbs-carousel': 'modules/bootstrap/bootstrap-carousel.js',
	    'tbs-collapse': 'modules/bootstrap/bootstrap-collapse.js',
	    'tbs-dropdown': 'modules/bootstrap/bootstrap-dropdown.js',
	    'tbs-modal': 'modules/bootstrap/bootstrap-modal.js',
	    'tbs-popover': 'modules/bootstrap/bootstrap-popover.js',
	    'tbs-scrollspy': 'modules/bootstrap/bootstrap-scrollspy.js',
	    'tbs-tab': 'modules/bootstrap/bootstrap-tab.js',
	    'tbs-tooltip': 'modules/bootstrap/bootstrap-tooltip.js',
	    'tbs-transition': 'modules/bootstrap/bootstrap-transition.js',
	    'tbs-typeahead': 'modules/bootstrap/bootstrap-typeahead.js',
	    
	    'baseurl': '/ci/index.php/admin/assets/',
	    'template-webmanagement': '/ci/index.php/admin/assets/website/templates-webadmin',
	    'template-website': '/ci/index.php/admin/assets/website/templates-website',
	    'template-mobile': '/ci/index.php/admin/assets/mobile/templates'
	},
	
	preload: ['plugin-json', 'plugin-text', 'plugin-coffee', 'plugin-less'],
	debug: 0
	
});


seajs.use('baseurl/js/initadmin');


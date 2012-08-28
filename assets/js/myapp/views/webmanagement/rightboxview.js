define(function(require, exports, module) {

	var rightboxviewTemplate = require('template-webmanagement/rightbox.tpl');
	
	window.RightBoxView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
			var template = _.template( rightboxviewTemplate );
			
			$(this.el).html(template);
			
			
			
	        return this;
	    }
	});


})



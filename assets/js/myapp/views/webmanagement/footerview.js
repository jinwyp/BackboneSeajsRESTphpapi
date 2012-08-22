define(function(require, exports, module) {


	var footerviewTemplate = require('baseurl/website/templates/webmanagement/footer.tpl');
	
	window.FooterView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },
	
	    render: function () {
   
			var template = _.template( footerviewTemplate );
			
			$(this.el).html(template);
			
	        return this;
	    }
	});


})



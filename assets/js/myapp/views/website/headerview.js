define(function(require, exports, module) {

	app.tpl.headerview = require('tplurl-website/header.tpl');
	
	window.HeaderView = Backbone.View.extend({
		
		initialize: function () {
			// this._modelBinder = new Backbone.ModelBinder();
	        this.render();
	    },
	    	
	    render: function () {
   
			app.tplpre.headerview = Handlebars.compile( app.tpl.headerview );
			$(this.el).html(app.tplpre.headerview(this.model.toJSON()) );

			// this._modelBinder.bind(this.model, this.$('#logined'));
	        return this;
	    },

	    events: {
			"click #usercenterbutton": "usercentersubmit",
			
	    },

	    usercentersubmit: function(){
	    	app.view.mainbox = new UserCenterView({model: app.model.session, el: $("#mainbox")} );
	    }

	});


})



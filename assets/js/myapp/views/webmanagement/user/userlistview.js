define(function(require, exports, module) {

	var userlistviewTemplate = require('template-webmanagement/user/userlist.tpl');	
	

	
	window.UserListView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },	
	
	    render: function () {
/*
			var template = _.template( userlistviewTemplate );
			$(this.el).html(template);

	        var usermodels = this.model.models;
	        var len = usermodels.length;	        
	        for (var i = 0; i < len; i++) {
	            app.view.userlistview = new UserListSingleView({model: usermodels[i] });
	            $("#userlistview").append(app.view.userlistview.el);
	        }	
*/        

			var template = Handlebars.compile( userlistviewTemplate );
			$(this.el).html(template ( {userlist: this.model.toJSON()} ));
	              
	        return this;
	    }
	});


})



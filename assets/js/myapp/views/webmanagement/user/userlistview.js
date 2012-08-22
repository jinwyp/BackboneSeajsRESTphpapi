define(function(require, exports, module) {


	require('./userlistsingleview');
	
	var userlistviewTemplate = require('baseurl/website/templates/webmanagement/user/userlist.tpl');	
	

	
	window.UserListView = Backbone.View.extend({
		
		initialize: function () {
	        this.render();
	    },	
	
	    render: function () {
	        var usermodels = this.model.models;
	        var len = usermodels.length;	        
	        
	        
			var template = _.template( userlistviewTemplate );
	        $(this.el).html(template);
	              
	        for (var i = 0; i < len; i++) {
	            app.view.userlistview = new UserListSingleView({model: usermodels[i] });
	            $("#userlistview").append(app.view.userlistview.el);
	        }

	        return this;
	    }
	});


})



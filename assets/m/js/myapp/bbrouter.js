define(function(require, exports, module) {

	var $ = jQuery = require('jquery');
	var Backbone = require('backbone');
	var _ = require('underscore');

	
	require('./model/usermodel');
	require('./collection/usercollection');
	
	require('./views/userlistview');
	require('./views/userview');
			
	require('./views/user/userloginview');
	require('./views/header/headerview');

	window.app = {
		model:{},
		view:{},
		collection:{},
		htmlbody:$('#pageapp')
	};

	
	
	
	var AppRouter = Backbone.Router.extend({
	    routes: {    		
    		"user/login" : "loginUser",  //jQuery mobile app
	        "user/reg" : "regUser",   	////jQuery mobile app
	        
	        "" : "userList",			//Twitter Bootstrap app
	        "user/add" : "addUser",        //Twitter Bootstrap app
    		"user/:id" : "userDetail"		//Twitter Bootstrap app    		 
	    },
	
	    initialize: function () {
	        
	    },
		
		userList: function(pageno) {			        
	        app.collection.userList1 = new UserCollection();
	        app.collection.userList1.fetch({success: function(){
	            $("#bodybox").html(new UserListView({model: app.collection.userList1}).el);
	        }});
	    },
	
		userDetail: function(id) {			        
	        app.model.user1 = new UserModel({id: id});		        
	        
	        app.model.user1.fetch({success: function(){
	        	app.view.userview1 = new UserView({ model: app.model.user1 });
	            $("#bodybox").html(app.view.userview1.el);
	        }});
	    },
	    
	    addUser: function() {
	        app.model.usernew = new UserModel();
	        $('#bodybox').html(new UserView({model: app.model.usernew}).el);
		},
	    
	    
	    
	    loginUser: function() {
	    	app.model.header = new UserModel();

	    	$('body').html(new UserLoginView({ model:app.model.header}).el);
/* 	    	$('#login').trigger("create"); */

	    	
/*
	        app.model.usernew = new UserModel();
	        $('pageapp').html(new UserLoginView({model: app.model.usernew}).el);
*/
		},
		
    	regUser: function() {
	        app.model.usernew = new UserModel();
	        $('#pageapp').html(new UserView({model: app.model.usernew}).el);
		}
	
	});	
	
	exports.initialize = function() {
		new AppRouter();
		Backbone.history.start(); //当所有的 路由 创建并设置完毕，调用 Backbone.history.start() 开始监控 hashchange 事件并分配路由
	};

})
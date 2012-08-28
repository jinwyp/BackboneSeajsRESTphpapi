define(function(require, exports, module) {


	
	require('./model/usermodel');
	require('./collection/usercollection');
	
	require('./views/webmanagement/headerview');
	require('./views/webmanagement/footerview');
	require('./views/webmanagement/leftmenuview');	
	require('./views/webmanagement/rightboxview');
	
	require('./views/webmanagement/user/userview');
	require('./views/webmanagement/user/userlistview');		
			
			
			
/*
	require('./views/mobile/user/userloginview');
	require('./views/mobile/header/headerview');
*/

	window.app = {
		model:{},
		view:{},
		collection:{},
		htmlbody:$('#pageapp'),
		temp: {}
	};

	
	
	
	var AppRouter = Backbone.Router.extend({
	    routes: {    		
    		"user/login" : "loginUser",  //jQuery mobile app
	        "user/reg" : "regUser",   	////jQuery mobile app


	        
	        "admin/user/list" : "adminUserList",		//Twitter Bootstrap app
	        "admin/user/add" : "adminUserAdd",        //Twitter Bootstrap app
    		"admin/user/:id" : "adminUserDetail"		//Twitter Bootstrap app    		 
	    },
	
	    initialize: function () {
			app.view.header = new HeaderView({ el: $("#headerbox")} );
			app.view.footer = new FooterView({ el: $("#footerbox")} );		  
			app.view.leftmenu = new LeftMenuView({ el: $("#leftmenu")} );	 
			app.view.rightbox = new RightBoxView({ el: $("#rightbox")} );
	    },
	    
	    renderAll: function(){
			app.view.header.render();
			app.view.footer.render();
			app.view.leftmenu.render();
			app.view.rightbox.render();
	    },
		
		adminUserList: function(pageno) {
			this.renderAll();
						
	        app.collection.userList1 = new UserCollection();
	        app.collection.userList1.fetch({success: function(){
	        	app.view.userlist = new UserListView({ model: app.collection.userList1 , el: $("#userlist") });
/* 	            $("#rightbox").append(new UserListView({model: app.collection.userList1, el: $("#userlist")}).el ); */
	                   
	        }});
	    },
	
		adminUserDetail: function(id) {
			this.renderAll();
						
	        app.model.user1 = new UserModel({id: id});	
			
	        app.model.user1.fetch({success: function(){
	        	
	        	app.view.userview1 = new UserView({ model: app.model.user1 , el: $("#userlist") });
/* 	        	$("#rightbox").append(new UserView({model: app.model.user1, el: $("#userlist") }).el);	   */
	        }});
	    },
	    
	    adminUserAdd: function() {
			this.renderAll();
	    
	        app.model.usernew = new UserModel();
	        app.view.useraddnew = new UserView({model: app.model.usernew, el: $("#userlist") });
		},
	    
	    
/*********/	    
/*
	    loginUser: function() {
	    	app.model.header = new UserModel();

	    	$('body').html(new UserLoginView({ model:app.model.header}).el);
	    	$('#login').trigger("create");

	    	
	        app.model.usernew = new UserModel();
	        $('pageapp').html(new UserLoginView({model: app.model.usernew}).el);
		},
*/
		
/*
    	regUser: function() {
	        app.model.usernew = new UserModel();
	        $('#pageapp').html(new UserView({model: app.model.usernew}).el);
		}
*/
	
	});	
	
	exports.initialize = function() {
		new AppRouter();
		Backbone.history.start(); //当所有的 路由 创建并设置完毕，调用 Backbone.history.start() 开始监控 hashchange 事件并分配路由
	};

})
define(function(require, exports, module) {


	
	require('./model/userregmodel');

	require('./collection/usercollection');
	
	

	require('./views/website/indexview');
	require('./views/website/mainboxview');
	require('./views/website/headerview');

	require('./views/website/user/regview');
	require('./views/website/user/loginview');
	require('./views/website/user/usercenterview');
			
/*
	require('./views/mobile/user/userloginview');
	require('./views/mobile/header/headerview');
*/	
	
	var AppRouter = Backbone.Router.extend({
	    routes: {  
	    	"" : "homepage",  
	    	"index" : "homepage",		
    		"login" : "loginUser",  
	        "reg" : "regUser",
	        "loginout" : "loginOut",
	        "*path" : "homepage"		
	        
	    }, 
	
		before: function(route){
			
			$("#mainbox").hide();
			// $("#mainbox").delay(2000);
			$("#mainbox").fadeIn();
			
			console.log ("before", app.model.session.get("login_state") );

		},

		after: function(){
			// $("#mainbox").slideUp();
		},

	    initialize: function () {
/*	    	this.on('all', function(routeEvent) {
	            // If you had clicked #foo, routeEvent would contain
	            // `route:bar`. You can trigger your CSS changes here.
	            
	        });*/
			app.view.indexpage = new IndexView({ el: $("body")} );
	    	app.view.header = new HeaderView({ model: app.model.session, el: $("#headerbox")} );
	    },


		
/*
		adminindex: function(pageno) {

	        app.collection.userList1 = new UserCollection();
	        app.collection.userList1.fetch({success: function(){
	        	app.view.userlist = new UserListView({ model: app.collection.userList1 , el: $("#userlist") });
	            $("#rightbox").append(new UserListView({model: app.collection.userList1, el: $("#userlist")}).el );
	                   
	        }});
	    },
	
		adminUserDetail: function(id) {					
	        app.model.user1 = new UserRegModel({id: id});	
			
	        app.model.user1.fetch({success: function(){	        	
	        	app.view.userview1 = new UserView({ model: app.model.user1 , el: $("#userlist") });
	        	$("#rightbox").append(new UserView({model: app.model.user1, el: $("#userlist") }).el);	  
	        }});
	    },
	    
	    adminUserAdd: function() {	    
	        app.model.usernew = new UserRegModel();
	        app.view.useraddnew = new UserView({model: app.model.usernew, el: $("#userlist") });
		},
	    
*/
	
	    homepage: function(path) {
	    	app.view.mainbox = new MainboxView({ el: $("#mainbox")} );

		},    
   
	    loginUser: function() {
	        
			if(app.model.session.get("login_state")){
				app.view.mainbox = new UserCenterView({model: app.model.session, el: $("#mainbox")} );
			}else{
				app.view.mainbox = new LoginView({model: app.model.session, el: $("#mainbox")} );
			}
		},
		
    	regUser: function() {
			if(app.model.session.get("login_state")){
				app.view.mainbox = new UserCenterView({model: app.model.session, el: $("#mainbox")} );
			}else{
				app.model.usernew = new UserRegModel();
				app.view.mainbox = new RegView({model: app.model.usernew, el: $("#mainbox")} );
			}	
		},

		loginOut: function(){
			app.model.session.delsession();
			app.view.mainbox = new MainboxView({ el: $("#mainbox")} );
		}
	
	});	
	
	exports.initialize = function() {
		new AppRouter();
		Backbone.history.start(); //当所有的 路由 创建并设置完毕，调用 Backbone.history.start() 开始监控 hashchange 事件并分配路由
	};

})
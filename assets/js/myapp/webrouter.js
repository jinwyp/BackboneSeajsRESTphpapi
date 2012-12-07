define(function(require, exports, module) {


	require('./model/usersession');

	require('./model/usermodel');
	require('./collection/usercollection');
	
	require('./views/website/headerview');

	require('./views/website/user/regview');
	require('./views/website/user/loginview');
	require('./views/website/user/usercenterview');
	
		
			
			
/*
	require('./views/mobile/user/userloginview');
	require('./views/mobile/header/headerview');
*/

	window.app = {
		model:{},
		modelbinder:{},
		view:{},
		tpl:{},
		collection:{},
		htmlbody:{},
		temp: {}
	};

	
	
	
	var AppRouter = Backbone.Router.extend({
	    routes: {  
	    	"" : "indexweb",  		
    		"login" : "loginUser",  
	        "reg" : "regUser",
	        
		 
	    },
	
	    initialize: function () {
	    	app.view.header = new HeaderView({ el: $("#headerbox")} );

	    	app.model.session = new UserSession();
console.log (app.model.session.login_state );
	    	if(app.model.session.login_state){
	    		//进入登陆后页面
	    		app.model.usernew = new UserModel();
				app.view.mainbox = new UserCenterView({model: app.model.usernew, el: $("#mainbox")} );

	    	}else{

	    	}
	  
			

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
	        app.model.user1 = new UserModel({id: id});	
			
	        app.model.user1.fetch({success: function(){	        	
	        	app.view.userview1 = new UserView({ model: app.model.user1 , el: $("#userlist") });
	        	$("#rightbox").append(new UserView({model: app.model.user1, el: $("#userlist") }).el);	  
	        }});
	    },
	    
	    adminUserAdd: function() {	    
	        app.model.usernew = new UserModel();
	        app.view.useraddnew = new UserView({model: app.model.usernew, el: $("#userlist") });
		},
	    
*/
	    
   
	    loginUser: function() {
	        app.model.usernew = new UserModel();
			app.view.mainbox = new LoginView({model: app.model.usernew, el: $("#mainbox")} );
		},
		
    	regUser: function() {
	
	        app.model.usernew = new UserModel();
			app.view.mainbox = new RegView({model: app.model.usernew, el: $("#mainbox")} );

		}
	
	});	
	
	exports.initialize = function() {
		new AppRouter();
		Backbone.history.start(); //当所有的 路由 创建并设置完毕，调用 Backbone.history.start() 开始监控 hashchange 事件并分配路由
	};

})

;jQuery(function($){
	
	//niceScroll
	$("html").niceScroll({cursorcolor:"#ffffff"});
	
	
	//Skin CSS
	$('#skin li').click(function(){
		$("#"+this.id).addClass("selected").siblings().removeClass("selected");
		$('#skinCss').attr("href","app/"+(this.id)+".css");
	});
	
	/*		
	$("#styles li").click(function(){ 
		var style = $(this).attr("id"); 
		$("link[title='"+style+"']").removeAttr("disabled"); 
		$("link[title!='"+style+"']").attr("disabled","disabled"); 
		$.cookie("mystyle",style,{expires:30}); 
		$(this).addClass("cur").siblings().removeClass("cur"); 
	}); 
	*/
	
	//Select Jump page
	$(".melvon").click(function(){
		$(".blockmask").show();
	});
			
	
	$(".preview").hover(function(){
			$(".preview_Item").fadeIn(300);
	});
	
	$(".preview_Item").hover(function(){
		 //...
		 }, function() {
			$(".preview_Item").fadeOut(300);
	});
				
				
					

       var selectheadertheme=true;
/*
	  //所有Header Block经过时显示Attribute Panel Icon
	  $(".block_header").hover(function(){
		  $(this).append($(".attribute_panel"));
		  $(".attribute_panel").show();
		  $(".block_header").css( {"z-index":"999"});
		  $(".header_panel").show();
		  $(".header_view").addClass("hover_view");
		  $(".icon_editor").hide();
		  $(".icon_move").hide();
	  }, function() {
          if(selectheadertheme){
              $(".header_panel").hide();
              $(".attribute_panel").hide();
              $(".icon_editor").hide();
              $(".block_header").css( {"z-index":"1"});
              $(".header_view").removeClass("hover_view");
          }
	  });
*/


/*
	  $(".block_content").hover(function(){
		  $(this).append($(".attribute_panel"));
		  $(".attribute_panel").show();
		  $(".icon_editor").show();
		  $(".icon_move").show();
		  $(".block_content").css( {"z-index":"999"});
	  }, function() {
		 $(".attribute_panel").hide();
		 $(".block_content").css( {"z-index":"1"});
	  });
*/

/*

	   $(".block_footer").hover(function(){
		  $(this).append($(".attribute_panel"));
		  $(".footer_view").addClass("hover_view");
		  $(".attribute_panel").show();
		  $(".icon_editor").hide();
		  $(".icon_move").hide();
		  $(".block_footer").css( {"z-index":"999"});
	  }, function() {
		  $(".footer_view").removeClass("hover_view");
		  $(".attribute_panel").hide();
		  $(".block_footer").css( {"z-index":"1"});
	  });
*/




/*
	  //点击Nav 的每个Theme
	  $(".theme_panel a").click(function(){
          selectheadertheme=false;
		  $(this).addClass("select").siblings("a").removeClass("select");
	  });
*/




/*
	  //点击Nav Block的设置图标
	  $(".icon_setup").bind("click",function(){
		var navlinkpanel=$(".navlink_panel");
		if (navlinkpanel.is(":hidden")){
		  $(".navlink_panel").slideDown(300);
	  	}else{
		  $(".navlink_panel").slideUp(300);
		}
	  });
*/



/*
	  //Block Attribut ICO 点击加载样式
	  $(".attribute_panel a").click(function(){
		  $(this).addClass("active").siblings("a").removeClass("active");
	  });
*/





	  //展开 Select Layout
	  $(".ico_layout_close").bind("click",function(){
		 var element=$(this);
		  if (element.hasClass("ico_layout_open")){
		   	element.removeClass("ico_layout_open", {duration:300});
		   	$('.layout_list').animate({left:'-82px'},{duration:300, queue:true});
		  }else{
		  	element.addClass("ico_layout_open", {duration:300});
		   	$('.layout_list').animate({left:'0px'},{duration:300, queue:true});
		 }
	  });






/*
	   //编辑 Page Attribute
	  $(".ico_edit").click(function(e) {
		  e.preventDefault();
		  $parent = $(this).parent();
		  $parent.append($(".page_attri_panel"));
		  $(".page_attri_panel").show();

	  });

	  $(".page_attri_panel .panel_close").click(function(e) {
	  		$(".page_attri_panel").hide();
	  });




	  //点击每个 Page Layout
	  $(".layout_list li").click(function(){
		  $(this).addClass("active").siblings("li").removeClass("active");
	  });





	  //点击每个 Page List
	  $(".PageListBox a").click(function(){
		  $(this).addClass("active").siblings("a").removeClass("active");
	  });
	  $(".listpage_00").click(function(){ $('#ajaxload').load('page.html .pagewrap'); });

	  for(i=1;i<9;i++) {
	  	eval('$(".listpage_0'+i+'").click(function(){ $(".pagewrap").load("page/listpage_0'+i+'.html"); })');
	  }

 */



/*

	  //点击 AutoBlock Icon
	  $(".ico_autoblock").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_auto"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_auto").width()))/2;
		  $(".tip_auto").css({"left":$left+"px","top":-($(".tip_auto").height()),"position":"absolute"}).fadeIn(200);
		  $(".tip_editor, .tip_static, .tip_ad").fadeOut(200);
		  $(".ico_autoeditor, .ico_staticblock, .ico_adblock").removeClass("ico_active");

	  });

	  //点击 Editor Icon
	  $(".ico_autoeditor").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_editor"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_editor").width()))/2;
		  $(".tip_editor").css({"left":$left+"px","top":-($(".tip_editor").height()),"position":"absolute"}).fadeIn(200);
  		  $(".tip_auto, .tip_static, .tip_ad").fadeOut(200);
		  $(".ico_autoblock, .ico_staticblock, .ico_adblock").removeClass("ico_active");
	  });


	  //点击 Static Icon
	  $(".ico_staticblock").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_static"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_static").width()))/2;
		  $(".tip_static").css({"left":$left+"px","top":-($(".tip_static").height()),"position":"absolute"}).fadeIn(200);
  		  $(".tip_auto, .tip_editor, .tip_ad").fadeOut(200);
		  $(".ico_autoeditor, .ico_autoeditor, .ico_adblock").removeClass("ico_active");
	  });


	  //点击 AD Icon
	  $(".ico_adblock").click(function(e) {
		  e.preventDefault();
		  $(this).addClass("ico_active");
		  $parent = $(this).parent().parent();
		  $parent.append($(".tip_ad"));
		  $offset = $parent.offset();
		  $left =  (parseInt($parent.width()) - parseInt($(".tip_ad").width()))/2;
		  $(".tip_ad").css({"left":$left+"px","top":-($(".tip_ad").height()),"position":"absolute"}).fadeIn(200);
  		  $(".tip_auto, .tip_editor, .tip_static").fadeOut(200);
		  $(".ico_autoblock, .ico_autoeditor, .ico_staticblock").removeClass("ico_active");
	  });
*/




/*
	  //点击TipBox里的每一个Layout
	  $(".tipbox_laytou a").click(function(){
		  $(this).addClass("selected").siblings("a").removeClass("selected");
	  });
*/


});
$('#imggallery').swipeleft(function(e){

    var imglist = $(this).find('ul').children();
    var imgnum = imglist.length;
    var currentnum = imglist.children().index(e.target);
    var showcurrentnum = currentnum + 2;
    var shownum = showcurrentnum.toString() + "/" + imgnum.toString();

    console.log(currentnum, imgnum,e.type);

    $(imglist[currentnum+1]).addClass("imggallerynext"); // 首先把下一张图片显示出来

    // 然后2张图滑动
    if(currentnum < imgnum - 1 ){
        $(imglist[currentnum]).animate({
                left: '-300px',top:'0px'},
            500,"swing", function(){
                // 然后把第一张消失
                $(imglist[currentnum]).removeClass("imggalleryshow");
            });

        $(imglist[currentnum + 1]).animate({
                left: '0px', top:'0px'},
            500,"swing",function(){
                // 然后把第二张图失变成第一张图的样式
                $(imglist[currentnum + 1]).removeClass('imggallerynext').addClass("imggalleryshow");
                $('#imggallerynum').html(shownum.toString());
            });
    }else{
        //处理到结尾的滑动滑动效果
        $(imglist[currentnum]).animate({
                left: '-50px',top:'0px'},
            300,"swing", function(){
            });
        $(imglist[currentnum]).animate({
                left: '0px',top:'0px'},
            300,"swing", function(){
            });
    }

});


$('#imggallery').swiperight(function(e){

    var imglist = $(this).find('ul').children();
    var imgnum = imglist.length;
    var currentnum = imglist.children().index(e.target);
    var showcurrentnum = currentnum ;
    var shownum = showcurrentnum.toString() + "/" + imgnum.toString();

    console.log(currentnum, imgnum,e.type);

    $(imglist[currentnum - 1]).addClass("imggallerynext"); // 首先把下一张图片显示出来

    // 然后2张图滑动
    if(currentnum > 0  ){
        $(imglist[currentnum]).animate({
                left: '300px',top:'0px'},
            500,"swing", function(){
                // 然后把第一张消失
                $(imglist[currentnum]).removeClass("imggalleryshow");
            });

        $(imglist[currentnum - 1]).animate({
                left: '0px', top:'0px'},
            500,"swing",function(){
                // 然后把第二张图失变成第一张图的样式
                $(imglist[currentnum - 1]).removeClass('imggallerynext').addClass("imggalleryshow");
                $('#imggallerynum').html(shownum.toString());
            });
    }else{
        $(imglist[currentnum]).animate({
                left: '50px',top:'0px'},
            300,"swing", function(){
            });
        $(imglist[currentnum]).animate({
                left: '0px',top:'0px'},
            300,"swing", function(){

            });

    }

});

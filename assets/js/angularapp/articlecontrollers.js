'use strict';

/* App Module */

var vcpapp = angular.module('vcpmodule', ['ui.bootstrap', 'firebase', 'vcpmodule.directive']);



vcpapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',                      {templateUrl: 'article_list_tpl.html', controller: vcpapp.controller.articleList }).
        when('/newarticle',          {templateUrl: 'article_new_tpl.html', controller: vcpapp.controller.articleCreateNew }).
        when('/detail/:articleId',  {templateUrl: 'article_detail_tpl.html', controller: vcpapp.controller.articleDetail }).

        otherwise({redirectTo: '/'});
}]);






/* Controllers */
vcpapp.controller.articleList = function ($scope, $filter, $q, angularFire, modelArticle) {

    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    var urlartilcelist = 'https://vcplatform.firebaseIO.com/articles';
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );



    var copytotaldata = [];
    var articlesinonepage;
    var pagecount;
    var usersession;
	
	$scope.cssloading = true;  //Article data Loading GIF animate: Start
	
    $q.all([$scope.usersessionFirebase, $scope.usersFirebase, $scope.articlesFirebase]).then(function() {
        $scope.articlestotaldata = $scope.articlesFirebase;
        var usersdata = $scope.usersFirebase;
        usersession = _.findWhere(usersdata, {email: $scope.usersessionFirebase.email});

        copytotaldata = $scope.articlestotaldata;

    //排序所有数据
    $scope.loadinit = function(flag,sort){
        for(var i = 0; i < $scope.articlestotaldata.length; i++){
               for(var j = 0;j < $scope.articlestotaldata.length; j++){
                   if(sort == 'desc'){
                       if(flag == 'published'){
                           if($scope.articlestotaldata[i].published > $scope.articlestotaldata[j].published){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'updated'){
                           if($scope.articlestotaldata[i].updated > $scope.articlestotaldata[j].updated){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'clickcount'){
                           if($scope.articlestotaldata[i].clickcount > $scope.articlestotaldata[j].clickcount){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }
                   }else{
                       if(flag == 'published'){
                           if($scope.articlestotaldata[i].published < $scope.articlestotaldata[j].published){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'updated'){
                           if($scope.articlestotaldata[i].updated < $scope.articlestotaldata[j].updated){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }else if(flag == 'clickcount'){
                           if($scope.articlestotaldata[i].clickcount < $scope.articlestotaldata[j].clickcount){
                               var param1 = $scope.articlestotaldata[i];
                               $scope.articlestotaldata[i] = $scope.articlestotaldata[j];
                               $scope.articlestotaldata[j] = param1;
                           }
                       }
                   }
               }
        }
    };
	
    $scope.loadinit('updated','desc');
	

    //页面总数
    articlesinonepage = 10;  // 文章每页数量
    pagecount = $scope.articlestotaldata.length / articlesinonepage;

    $scope.noOfPages = parseInt(pagecount)== pagecount ? pagecount : parseInt(pagecount) + 1;  //当前页数
    if($scope.noOfPages==0){
        $scope.noOfPages=1;
    }

    //当前页数
    $scope.currentPage = 1;
    $scope.articlesdata = [];

    //获取选中数据
    $scope.loadcurrentpagedata = function(){
        $scope.articlesdata.length = 0;
        if($scope.noOfPages != 0){
            if($scope.currentPage > $scope.noOfPages){
                $scope.currentPage = $scope.noOfPages;
            }
        }

        var j = 0;
        for(var i = (($scope.currentPage-1)*articlesinonepage);i < $scope.articlestotaldata.length;i ++){
            $scope.articlesdata[j] = $scope.articlestotaldata[i];
            j++;
            if($scope.articlesdata.length > (articlesinonepage-1)){
                return;
            }
        }
    }

    $scope.loadcurrentpagedata();
    $scope.articlepreviewdata = $scope.articlesdata[0];
	
	

    //检测currentPage值
    $scope.$watch('currentPage', function(newPage){
        $scope.watchPage = newPage;
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
        $scope.cssarticleindex = 0;
        window.scrollTo(0,0);  //滚动条置顶
    });

	$scope.cssloading = false;  //Article data Loading GIF animate: End
	
    });//firebase then End

    $scope.cssshowupdate = true;
    $scope.cssshowpublish = true;
    $scope.cssshowclick = true;
	
	

    //按类型排序
    $scope.orderbytype = function(flag,sort){
        $scope.loadinit(flag,sort);
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
        if(flag == 'updated'){
            $scope.cssshowupdate = !$scope.cssshowupdate;
        }else if(flag == 'published'){
            $scope.cssshowpublish = !$scope.cssshowpublish;
        }else if(flag == 'clickcount'){
            $scope.cssshowclick = !$scope.cssshowclick;
        }
    };



    $scope.showEditIcon = function(index){
        $scope.cssshowediticon = index;
    };

    $scope.cssarticleindex = 0;
    $scope.clickArticle = function(article, index) {
        $scope.articlepreviewdata = article;
        $scope.cssarticleindex = index;
    };

    $scope.openDelModal = function (article) {
        $scope.articlepreviewdata = article;
        $scope.cssshowdelmodal = true;
    };

    $scope.closeDelModal = function () {
        $scope.cssshowdelmodal = false;    //关闭弹出提示框 Modal
    };

    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };


    $scope.delArticle = function(article) {
        var getdeleteindex=$scope.searchdeleteindex(article);

        $scope.cssshowdelmodal = false;      //关闭弹出提示框 Modal
        $scope.articlestotaldata.splice(getdeleteindex, 1);

        copytotaldata = $scope.articlestotaldata;
        var pagecount1 = $scope.articlestotaldata.length/articlesinonepage;
        $scope.noOfPages = parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages == 0){
            $scope.noOfPages = 1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
    };

    $scope.searchdeleteindex = function(article){
        for(var i = 0; i < $scope.articlestotaldata.length; i++){
            if(article.id == $scope.articlestotaldata[i].id){
                return i;
            }
        }
    }

    //显示List详细内容
    $scope.loadhtml = function(val) {
        return val;
    };



    $scope.cssshowcomments = false;

    //点击更改文章状态按钮事件
    $scope.clickarticlestatus = function(status1, article){
        $scope.cssshowcomments = true;
        if(status1 == 'Published'){
            article.published = modelArticle.getDateNow();
        }else{
            article.published = 0;
        }
        $scope.currentarticle  = article;
        $scope.currentarticlestatus = status1;
        $scope.currentarticlereviewcomment = "";
    };

    $scope.closecomments = function(){
        $scope.cssshowcomments = false;
    };

    $scope.savearticlestatus = function(){
        var newstatus ={
            date : modelArticle.getDateNow(),
            status : $scope.currentarticlestatus,
            version : $scope.currentarticle.revision.length,
            operator : usersession.firstname,
            reviewcomment : $scope.currentarticlereviewcomment
        };

        if( $scope.currentarticlestatus == "published"){
            $scope.currentarticle.published = modelArticle.getDateNow();
        }
        $scope.currentarticle.updated = modelArticle.getDateNow();
        $scope.currentarticle.status = $scope.currentarticlestatus;
        $scope.currentarticle.lastreviewcomment = $scope.currentarticlereviewcomment;
        $scope.currentarticle.editor =  usersession.firstname;
        $scope.currentarticle.reviewhistory.push(newstatus);

        $scope.cssshowcomments = false;
        //保存到firebase中
        for(var i = $scope.articlestotaldata.length; i--; i>=0){
            if ($scope.articlestotaldata[i].id == $scope.currentarticle.id) {
                $scope.articlestotaldata[i] = $scope.currentarticle;
            }
        }
    };

    //搜索提示
    $scope.selected = undefined;
    $scope.states = [];

    $scope.selectdata=function(){
        var titledata=[],data=[],articledata=[];
        if($scope.selected==""){
            $scope.articlestotaldata=copytotaldata;
        }else{
            for(var i = 0;i < copytotaldata.length; i++){
                titledata[i] = copytotaldata[i].title;
                articledata[i] = copytotaldata[i].author;
            }

            //获取匹配title
            var resultdata = $filter('filter')(titledata, $scope.selected);

            var resultarticle = $filter('filter')(articledata, $scope.selected);
            //去除重复title
            resultdata=_.union(resultdata);
            resultarticle= _.union(resultarticle);
            //根据title获取相应的
            // 数据
            for(var j = 0;j < resultdata.length; j++){
                for(var i = 0;i < copytotaldata.length; i++){
                    if(copytotaldata[i].title == resultdata[j]){
                        data.push(copytotaldata[i]);
                    }
                }
            }
            for(var j = 0;j < resultarticle.length; j++){
                for(var i = 0;i < copytotaldata.length; i++){
                    if(copytotaldata[i].author == resultarticle[j]){
                        data.push(copytotaldata[i]);
                    }
                }
            }
            $scope.articlestotaldata = data;
        }

        var pagecount1 = $scope.articlestotaldata.length/articlesinonepage;
        $scope.noOfPages =parseInt(pagecount1)== pagecount1 ? pagecount1 : parseInt(pagecount1)+1;
        if($scope.noOfPages==0){
            $scope.noOfPages=1;
        }
        $scope.loadcurrentpagedata();
        $scope.articlepreviewdata = $scope.articlesdata[0];
    };





    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};








vcpapp.controller.articleDetail = function ($scope, $routeParams, $location, $q, modelArticle, angularFire) {

    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    var urlmaxid = "https://vcplatform.firebaseIO.com/maxid";
    $scope.maxidFirebase = angularFire(urlmaxid, $scope, 'maxidFirebase', {});

    var urltaglist = "https://vcplatform.firebaseIO.com/tags";
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );


    function getMaxTagId(){
        if($scope.maxidFirebase.tagid == undefined ){
            $scope.maxidFirebase = {tagid : 100001};
        }else{
            $scope.maxidFirebase.tagid = $scope.maxidFirebase.tagid + 1;
        }
        return $scope.maxidFirebase.tagid
    }

    function checkTagExist(tagname) {
        var tagresult = _.findWhere($scope.tagsFirebase, {tagname: tagname});

        if (tagresult === undefined) {
            return false;
        }else{
            return tagresult;
        }
    }

    $scope.cssTagsPanel = false;
    var usersession;
    var articleId = $routeParams.articleId;
//    $scope.articledata = modelArticle.getArticleById(articleId);

    $q.all([$scope.usersessionFirebase, $scope.usersFirebase, $scope.maxidFirebase, $scope.articlesFirebase, $scope.tagsFirebase]).then(function() {
        var usersdata = $scope.usersFirebase;
        usersession = _.findWhere(usersdata, {email: $scope.usersessionFirebase.email});
        console.log(usersession);

        for(var i = $scope.articlesFirebase.length; i--; i>=0){

            if ($scope.articlesFirebase[i].id == articleId) {

                $scope.articledata = $scope.articlesFirebase[i];

                if (typeof($scope.articledata.tags) == "undefined"){
                    $scope.articledata.tags =[];
                }

                var tagstr = '';

                for(var j = 0;j<$scope.articledata.tags.length;j++){
                    tagstr += $scope.articledata.tags[j].tagname+',';
                }
                $('.tagsinput').importTags(tagstr);
                $(".tagsinput").tagsInput();    //初始化 加载tag标签
                break;
            }
        }


    });

    $scope.openDelModal = function () {
        $scope.cssmodalshow = true;
    };
    $scope.closeDelModal = function () {
        $scope.cssmodalshow = false;   //关闭弹出提示框 Modal
    };
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.delArticle = function(articleid) {
        $scope.cssmodalshow = false;  //关闭弹出提示框 Modal
//        modelArticle.delArticleById(articleid);

        for(var i = $scope.articlesFirebase.length; i--; i>=0){
            if ($scope.articlesFirebase[i].id === articleid) {
                $scope.articlesFirebase.splice(i, 1);
            }
        }
        $location.path('/');
    };

    $scope.cssshowmodifymodal = false;


    $scope.confirmModifyArticle = function(formcallback) {
        if (formcallback.$valid) {
            $scope.cssshowmodifymodal = true;
            $scope.newversioncomment = "";
        }
    };


    //关闭version comment对话框
    $scope.closecomments = function(){
        $scope.cssshowmodifymodal = false;
    };


    $scope.saveModifyArticle = function(){
        $scope.articledata.updated = modelArticle.getDateNow();
        $scope.articledata.editor = usersession.firstname;
        $scope.articledata.lastversioncomment = $scope.newversioncomment;


        var temptagslistname = $(".tagsinput").exportTags();
        $scope.articledata.tags = [];
        //在tag 数据库查询是否是已经存在的tag 如果不存在就新增加到firebase里面
        for(var i=0; i<temptagslistname.length; i++){
            var newtag;
            if(checkTagExist(temptagslistname[i])){
                newtag = checkTagExist(temptagslistname[i]);
            }else{
                newtag = {
                    "tagid" : getMaxTagId(),
                    "tagname" : temptagslistname[i]
                };
                $scope.tagsFirebase.push(newtag);
            }
            $scope.articledata.tags.push(newtag);
        }

        var newrevisionid = $scope.articledata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.articledata.title,
            "description" : $scope.articledata.description,
            "contentbody": $scope.articledata.contentbody,
            "status": $scope.articledata.status,
            "created": $scope.articledata.created,
            "updated": modelArticle.getDateNow(),
            "published": $scope.articledata.published,
            "author": $scope.articledata.author,
            "editor": usersession.firstname,
            "clickcount":$scope.articledata.clickcount,
            "category": $scope.articledata.category,
            "categoryid": $scope.articledata.categoryid,
            "tags": $scope.articledata.tags,
            "lastversioncomment":$scope.articledata.lastversioncomment,
            "lastreviewcomment": $scope.articledata.lastreviewcomment
        };

        $scope.articledata.revision.push(newrevision);

//        modelArticle.saveArticle($scope.articledata);

        for(var i = $scope.articlesFirebase.length; i--; i>=0){
            if ($scope.articlesFirebase[i].id == articleId) {
                $scope.articlesFirebase[i] = $scope.articledata;
            }
        }

        $scope.cssshowmodifymodal = false;
    };



    //显示Edit预览内容
    $scope.showeditpreview = function(val){
        return val;
    };

    $scope.displayversioninfo=function(revisiondata){
       // var data=$scope.articledata.revision[index];
        $scope.articledata.title = revisiondata.title;
        $scope.articledata.contentbody = revisiondata.contentbody;
        $scope.articledata.tags = revisiondata.tags;
        if (typeof($scope.articledata.tags) == "undefined"){
            $scope.articledata.tags =[];
        }
        var tagstr = '';
        for(var i=0;i<$scope.articledata.tags.length;i++){
            tagstr += $scope.articledata.tags[i].tagname+',';
        }
        $('.tagsinput').importTags(tagstr);
    };



    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};








vcpapp.controller.articleCreateNew = function ($scope, $routeParams, $location, $q, modelArticle, angularFire ) {
    var usersessionurl = "https://vcplatform.firebaseIO.com/usernow";
    $scope.usersessionFirebase = angularFire(usersessionurl, $scope, 'usersessionFirebase', {});

    var usersurl = "https://vcplatform.firebaseIO.com/users";
    $scope.usersFirebase = angularFire(usersurl, $scope, 'usersFirebase', []);

    var urlmaxid = "https://vcplatform.firebaseIO.com/maxid";
    $scope.maxidFirebase = angularFire(urlmaxid, $scope, 'maxidFirebase', {});

    var urltaglist = "https://vcplatform.firebaseIO.com/tags";
    $scope.tagsFirebase = angularFire(urltaglist, $scope, 'tagsFirebase', [] );

    var urlartilcelist = "https://vcplatform.firebaseIO.com/articles";
    $scope.articlesFirebase = angularFire(urlartilcelist, $scope, 'articlesFirebase', [] );

    function getMaxTagId(){
        if($scope.maxidFirebase.tagid == undefined ){
            $scope.maxidFirebase.tagid = 100001;
        }else{
            $scope.maxidFirebase.tagid = $scope.maxidFirebase.tagid  + 1;
        }
        return $scope.maxidFirebase.tagid
    }

    function getMaxArticleId(){
        if($scope.maxidFirebase.aritcleid == undefined ){
            $scope.maxidFirebase.aritcleid = 100001;
        }else{
            $scope.maxidFirebase.aritcleid = $scope.maxidFirebase.aritcleid  + 1;
        }
        return $scope.maxidFirebase.aritcleid

    }

    function checkTagExist(tagname) {
        var tagresult = _.findWhere($scope.tagsFirebase, {tagname: tagname});

        if (tagresult === undefined) {
            return false;
        }else{
            return tagresult;
        }
    }

    var usersession;

    $q.all([$scope.usersessionFirebase, $scope.usersFirebase, $scope.maxidFirebase, $scope.articlesFirebase, $scope.tagsFirebase]).then(function() {

        var usersdata = $scope.usersFirebase;
        usersession = _.findWhere(usersdata, {email: $scope.usersessionFirebase.email});
        console.log(usersession);

        $scope.newarticleadata = {
            "id": getMaxArticleId(),
            "title": "",
            "description": "",
            "contentbody": "",
            "status": "Draft",
            "created": modelArticle.getDateNow(),
            "updated": modelArticle.getDateNow(),
            "published" : 0,
            "author": usersession.firstname ,
            "editor": usersession.firstname ,
            "clickcount": 0,
            "category" : "--",
            "categoryid" : 1000,
            "tags": [],
            "revision" : [],
            "lastversioncomment" : "",
            "lastreviewcomment" : "",
            "reviewhistory" : []
        };

        var newstatus ={
            date : modelArticle.getDateNow(),
            status : "Draft",
            version : 1,
            operator : $scope.newarticleadata.author,
            reviewcomment : ''
        };

        $scope.newarticleadata.reviewhistory.push(newstatus);
    });



    $(".tagsinput").tagsInput({
//        'autocomplete': modelTag.getTagList()
    });   //初始化 加载tag标签



    $scope.cssTagsPanel = false;
    $scope.cssmodalshow = false;
    $scope.cssmodalslide = {
        backdropFade: true,
        dialogFade:true
    };

    $scope.showEditPreview = function(val){
        return val;
    };

    $scope.conformNewArticle = function(callback) {
        if (callback.$valid) {
            $scope.cssmodalshow = true;
        }
    };



    $scope.closeModal = function () {
        $scope.cssmodalshow = false;
    };
    $scope.saveNewArtcle = function() {

        //读取文章的Tags
        var temptagslistname = $(".tagsinput").exportTags();
        $scope.newarticleadata.tags = [];

        //在tag 数据库查询是否是已经存在的tag 如果不存在就新增加到firebase里面
        for(var i=0;i<temptagslistname.length;i++){
            var newtag;
            if(checkTagExist(temptagslistname[i])){
                newtag = checkTagExist(temptagslistname[i]);
            }else{
                newtag = {
                    "tagid" : getMaxTagId(),
                    "tagname" : temptagslistname[i]
                };
                $scope.tagsFirebase.push(newtag);
            }
            $scope.newarticleadata.tags.push(newtag);
        }

        //$scope.newarticleadata.category=$(".dk_label")[0].textContent;

        //增加文章每一次修改版本信息
        var newrevisionid = $scope.newarticleadata.revision.length + 1;
        var newrevision = {
            "versionid" :  newrevisionid ,
            "versionnum" :  newrevisionid ,
            "title" : $scope.newarticleadata.title,
            "description" : $scope.newarticleadata.description,
            "contentbody": $scope.newarticleadata.contentbody,
            "status": $scope.newarticleadata.status,
            "created": $scope.newarticleadata.created,
            "updated": $scope.newarticleadata.updated,
            "published": $scope.newarticleadata.published,
            "author": $scope.newarticleadata.author,
            "editor": $scope.newarticleadata.editor,
            "clickcount":$scope.newarticleadata.clickcount,
            "category": $scope.newarticleadata.category,
            "categoryid": $scope.newarticleadata.categoryid,
            "tags" : $scope.newarticleadata.tags,
            "lastversioncomment" : $scope.newarticleadata.lastversioncomment,
            "lastreviewcomment" : $scope.newarticleadata.lastreviewcomment
        };

        $scope.newarticleadata.revision.push(newrevision);
        $scope.cssmodalshow = false;

        //保存文章
//        modelArticle.createNewArticle($scope.newarticleadata);  //使用firebase
        $scope.articlesFirebase.push(angular.copy($scope.newarticleadata));

        $location.path('/');
    };


    //标签显示提示框
    $('.vcpbox').tooltip({
        selector: "a[rel=tooltip]"
    });
};


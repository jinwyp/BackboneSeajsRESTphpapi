
'use strict';

var vcpapp = angular.module('vcpmodule', ['ngResource', 'vcpmodule.service']);

var page = {
    c:{}
}
vcpapp.controller(page.c);


/* Controllers */
page.c.pageListcontroller = function($scope, $location, $http, $q, $resource, Category) {
    
    var ca1 = Category.get({Id:5}, function() {
        ca1.categorywebsitename = 'goodname';
        ca1.$update({Id:5});
    });

    $scope.category = {
        categorywebsitename : '',
        categorymenuname : '',
        categorymobilename : '',
        level : 1,
        parentcategoryid : 0,
        displayorder : 10,
        nodisplay : 0

    };

    // $http.get('/index.php/api/restful_category/category/id/2').success(function(data, status, headers, config){
    //         console.log(data);
    //         console.log(config);
    //         console.log(status);
    //         console.log(headers);

    //     }
        
    // )


    //显示footer nav 编辑框
    
    $scope.save = function(){
        // $http.post('/index.php/api/restful_category/category', $scope.category).success(function(data, status, headers, config){
        //     console.log(data);
        //     console.log(config);
        //     console.log(status);
        //     console.log(headers);
        // }

        $http.put('/index.php/api/restful_category/category/id/5', $scope.category).success(function(data, status, headers, config){
            console.log(data);
            console.log(config);
            console.log(status);
            console.log(headers);
        }
        // $http.delete('/index.php/api/restful_category/category/id/4', $scope.category).success(function(data, status, headers, config){
        //     console.log(data);
        //     console.log(config);
        //     console.log(status);
        //     console.log(headers);
        // }
        
    )
    }
}
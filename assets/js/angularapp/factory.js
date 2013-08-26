/**
 * Created with JetBrains WebStorm.
 * User: ywang
 * Date: 7/8/13
 * Time: 4:16 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict'

/*  Factory  */

angular.module('vcpmodule.service', ['ngResource']).factory('Category', function($resource) {
    return $resource('/index.php/api/restful_category/category/id/:Id', {}, {
        query: {method:'GET', params:{Id:''}, isArray:true},
        
        update: {method:'PUT'}
        
        })
})


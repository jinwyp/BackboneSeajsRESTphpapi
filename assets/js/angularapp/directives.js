/**
 * Created with JetBrains WebStorm.
 * User: ywang
 * Date: 7/8/13
 * Time: 1:49 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict'

/* Directives */

angular.module('vcpmodule.directive', []).
    directive('enterKeypress', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind("keypress", function(event) {
                    if(event.which === 13) {
                        scope.$apply(function(){
                            scope.$eval(attrs.enterKeypress);
                        });
                        event.preventDefault();
                    }
                });
            }
        };
});

angular.module('vcpmodule.directive', []).
    directive('ckEditor', function() {
        return {
            require: '?ngModel',
            link: function(scope, elm, attr, ngModel) {
                var ck = CKEDITOR.replace(elm[0]);
                if (!ngModel) return;

                ck.on('pasteState', function() {
                    scope.$apply(function() {
                        ngModel.$setViewValue(ck.getData());
                    });
                });
          /*      ck.on('change', function(e) {
                    $("#contentpreview").html(e.editor.getData());
                });*/

                ngModel.$render = function(value) {
                    ck.setData(ngModel.$viewValue);
                };
            }
        };
});


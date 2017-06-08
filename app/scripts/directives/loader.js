'use strict';

/**
 * @ngdoc directive
 * @name angular1App.directive:loader
 * @description
 * # loader
 */
angular.module('angular1SiteApp')
    .directive('loader', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div ng-show="loading" class="loading"><img src="images/loader.gif">LOADING...</div>',
            link: function(scope, element, attr) {
                scope.$watch('loading', function(val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    });

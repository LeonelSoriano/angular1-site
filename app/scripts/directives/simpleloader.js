'use strict';

/**
 * @ngdoc directive
 * @name angular1SiteApp.directive:simpleLoader
 * @description
 * # simpleLoader
 */
angular.module('angular1SiteApp')
    .directive('simpleLoader', function() {
        return {
            scope: {
                showAjax: '='
            },
            restrict: 'E',
            transclude: true,
            replace: true,
            template: `
            <div id="content-simple-loader">
                <div id="simple-loader-overlay" ng-show="showAjax"></div>
                <ng-transclude></ng-transclude>
            </div>
            `,
        };
    });
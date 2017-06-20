'use strict';

/**
 * @ngdoc directive
 * @name angular1SiteApp.directive:simpleLoader
 * @description
 * # simpleLoader
 */
angular.module('angular1SiteApp')
  .directive('simpleLoader', function () {
        return {
            scope: {
                hola : '='
            },
            restrict: 'E',
            transclude: true,
            replace: true,
            template: `
              <div class="ui  dimmer">
              <ng-transclude></ng-transclude>
                <div class="ui loader" ng-show="hola"><img src="images/loader.gif"></div>
              </div>
            `,
            link: function(scope, element, attr) {
                console.log(scope.hola);
                scope.$watch('hola', function(val) {
                   
                    // if (val)
                    //     $(element).show();
                    // else
                    //     $(element).hide();
                });
               
               
            }
        };
  });
  
  
  //<div  style="background-color:red;height:800px"><img src="images/loader.gif">LOADING...</div>
// <div id="capa1"> <img src="images/loader.gif" /> </div>
// <div id="capa2"> asd </div>
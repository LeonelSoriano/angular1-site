'use strict';

/**
 * @ngdoc directive
 * @name angular1SiteApp.directive:myTable
 * @description
 * # myTable
 */
angular.module('angular1SiteApp')
    .directive('myTable', function() {
        return {
            transclude: true,
            scope: {
                sort: '@', //como lo ordeno
                maxpage: '@', //cantidad por paginas
                values: '=' //itenes para la tabla
            },
            link: function(scope) {

                scope.lengthColumn = 0;
                scope.paginationButton = 0;

                alert(scope.maxpage);

                //defino el max page si no viene desde la directiva html
                if (scope.maxpage === undefined || scope.maxpage !== null || !isNaN(scope.maxpage)) {
                    scope.maxpage = 10;
                }

                //consigo la cnatidad de columnas en la tabla
                if (scope.values.length <= 0) {
                    console.warn("el valor de la tabla esta vacio");
                } else {
                    scope.lengthColumn = Object.keys(scope.values[0]).length;
                    scope.paginationButton = Math.floor(scope.values.length / scope.maxpage);

                }




            },
            template: `<div>
 <table class="table table-condensed">
    <thead>
    <th ng-repeat="(z,y) in values[0]">
       {{z}}
    </th>
    </thead>
    <tbody ng-repeat="x in values">
     <tr>
      <td ng-repeat="(key, val) in x">
        {{val}}
      </td> 
     </tr>
    </tbody>
    </table>  



    <div class="btn-toolbar" role="toolbar" >
      <div class="btn-group pull-right">
          <ul class="pagination" style="margin: 0;">
            <li><a href="javascript:void(0)">1</a></li>
            <li><a href="javascript:void(0)">2</a></li>
            <li><a href="javascript:void(0)">3</a></li>
            <li><a href="javascript:void(0)">4</a></li>
            <li><a href="javascript:void(0)">5</a></li>
          </ul>
      </div>
    </div>

{{paginationButton}}
  <div ng-repeat="n in [].constructor(paginationButton) track by $index">
      {{ $index }}
  </div>


  </div>`,
            restrict: 'AE'
        };
    });
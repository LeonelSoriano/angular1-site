'use strict';

/**
 * @ngdoc directive
 * @name angular1SiteApp.directive:myTableEdit
 * @description
 * # myTableEdit
 */
angular.module('angular1SiteApp')
    .directive('myTableEdit', function() {

        function createPagination(scope) {

            //defino el max page si no viene desde la directiva html
            if (scope.maxpage === undefined || scope.maxpage === null || isNaN(scope.maxpage)) {
                scope.maxpage = 10;
            } else {
                scope.maxpage = Number(scope.maxpage);
            }

            //consigo la cnatidad de columnas en la tabla
            if (scope.values == null || scope.values.length <= 0) {
                console.warn("el valor de la tabla esta vacio");
            } else {
                scope.lengthColumn = Object.keys(scope.values[0]).length;
                scope.paginationButton = Math.floor(scope.valuesTmp.length / scope.maxpage);
            }
        }


        function logicTable(scope) {

            scope.valuesTmp = scope.values;

            scope.filterTable = function() {
                scope.valuesTmp = scope.values;
                if (scope.filterInputValues === null || scope.filterInputValues.length === null ||
                    scope.filterInputValues.length === undefined ||
                    scope.filterInputValues.length === 0) {
                    scope.valuesTmp = scope.values;
                    return;
                }

                //verifica si no se a usado algun filtro ais no usar los otros procesos si no se a llenado alguno
                var isNotFilter = false;
                for (var i = 0; i <= scope.filterInputValues.length; i++) {
                    if (scope.filterInputValues[i] !== undefined &&
                        scope.filterInputValues[i].length !== 0) {
                        i = scope.filterInputValues.length;
                        isNotFilter = true;
                    }
                }
                if (!isNotFilter) {
                    return;
                }

                var ex = scope.valuesTmp;

                scope.valuesTmp = ex.filter(function(item) {
                    var indexFilter = 0; //me indica el indice del input filter

                    for (var key in item) {

                        if (scope.filterInputValues[indexFilter] === undefined ||
                            scope.filterInputValues[indexFilter] === '') {
                            indexFilter++;
                            continue;
                        }
                        if (new RegExp(scope.filterInputValues[indexFilter]).test(item[key])) {
                            return true;
                        }

                        if (item.hasOwnProperty(key)) {
                            // console.log(key, item[key]);
                        }
                        indexFilter++;
                    }
                    return false;
                });

            };

            createPagination(scope);
        }


        return {
            transclude: true,
            scope: {
                sort: '@', //como lo ordeno
                maxpage: '@', //cantidad por paginas
                values: '=', //itenes para la tabla
                id: '@',
                onRemove: '=',
                onAdd: '=',
                onUpdate: '=',
                title: '@'
            },
            link: function(scope) {
                scope.filterInputValues = [];

                scope.selectedColum = {};

                //index actual en la paginacion
                scope.actualIndex = 0;

                //columnas de la tabla
                scope.lengthColumn = 0;
                //cantidad de botones ne la paginacion
                scope.paginationButton = 0;

                scope.$watch('values', function() {
                    logicTable(scope);
                });


                scope.onchangePage = function(index) {
                    scope.actualIndex = index;
                };

                scope.onFilter = function() {
                    scope.filterTable();
                    createPagination(scope);
                };

                //evento de remove
                scope.onRemoveInternal = function(selected) {
                    if (selected !== undefined && scope.onRemove !== undefined) {
                        scope.values = null;
                        scope.selectedColum.id = null;
                        scope.onRemove(selected);
                    }
                };

                //evento de agregar
                scope.onAddInternal = function() {
                    if (scope.onAdd !== undefined) {
                        scope.onAdd();
                    }
                };

                //evento de actualizar
                scope.onUpdateInternal = function(selected) {
                    if (scope.onUpdate !== undefined) {
                        scope.onUpdate(selected);
                    }
                };

                scope.getHide = function() {
                    console.log();
                    return (scope.values === undefined || scope.values === null || scope.values.length === null) ? true : false;
                };
            },
            template: `<div>  
            
  <simple-loader show-ajax="getHide()">          
  <h1 class="text-center">{{title}}</h1>
 <table class="table  table-bordered">
    <thead>
    <th ng-repeat="(z,y) in values[0]" class="text-center" >
        <div ng-if="z != 'id'">
               {{z}}
            <br/>
            <input type="text"   ng-model="filterInputValues[$index]" ng-keyup="onFilter()" 
            style="width:70%" />
        </div>
    </th>
    </thead>
    <tbody ng-repeat="x in 
        valuesTmp.slice(actualIndex * maxpage ,(actualIndex * maxpage) + maxpage)">
     <tr>

      <td ng-repeat="(key, val) in x " >

        <div ng-if="key !== 'id'" >
         {{val}}
        </div>
        <div ng-if="key === 'id'">
            <input type="radio" ng-model="selectedColum.id"  value="{{val}}">
        </div>
      </td> 
     </tr>
    </tbody>
    </table>  
    <div class="btn-toolbar" role="toolbar" style="margin-bottom: 8px;">
      <div class="btn-group pull-right">
          <ul class="pagination" style="margin: 0;">
                <li ng-repeat="n in [].constructor(paginationButton+1) track by $index">
                    <a ng-click="onchangePage($index)" href="javascript:void(0)">{{$index + 1}}</a>
                </li>
          </ul>
      </div>
      <div >
        <button class="btn btn-success" ng-click="onAddInternal()" >Agregar</button>
        <button class="btn btn-primary"  ng-show="selectedColum.id" style="margin-left: 10px;" ng-click="onUpdateInternal(selectedColum.id)" >Actualizar</button>
        <button class="btn btn-danger"  ng-show="selectedColum.id" ng-click="onRemoveInternal(selectedColum.id)" style="margin-left: 10px;" >Eliminar</button>
      </div>
      
    </div>

   </simple-loader> 
  </div>`,
            restrict: 'AE'
        };
    });
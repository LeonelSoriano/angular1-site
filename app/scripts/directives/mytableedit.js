'use strict';

/**
 * @ngdoc directive
 * @name angular1SiteApp.directive:myTableEdit
 * @description
 * # myTableEdit
 */
angular.module('angular1SiteApp')
  .directive('myTableEdit', function () {
        return {
            transclude: true,
            scope: {
                sort: '@', //como lo ordeno
                maxpage: '@', //cantidad por paginas
                values: '=', //itenes para la tabla
                id: '@'
            },
            link: function(scope, elem, attrs) {

                scope.filterInputValues = [];

                scope.selectedColum = {};

                scope.valuesTmp = scope.values;

                scope.filterTable = function(){
                    scope.valuesTmp = scope.values;
                    if(scope.filterInputValues.length === null || 
                    scope.filterInputValues.length === undefined ||
                    scope.filterInputValues.length == 0){
                        scope.valuesTmp = scope.values;
                        return;
                    }

                    //verifica si no se a usado algun filtro ais no usar los otros procesos si no se a llenado alguno
                    var isNotFilter = false;
                    for(var i = 0; i <= scope.filterInputValues.length; i++){
                        if(scope.filterInputValues[i] !== undefined &&
                            scope.filterInputValues[i].length != 0){
                                i = scope.filterInputValues.length;
                                isNotFilter = true;
                            }
                    }
                    if(!isNotFilter){
                        return;
                    }
                    
                    var ex = [{ id: '1', nombre: 'leonel', apellido: 'ape' }, { id: '2', nombre: 'sorianmo', apellido: 'ape' }];
                  
                    scope.valuesTmp = ex.filter(function(item){  
                        var indexFilter = 0; //me indica el indice del input filter

                        for (var key in item) {
                            
                            if(scope.filterInputValues[indexFilter] === undefined || 
                                scope.filterInputValues[indexFilter] == ''){
                                indexFilter++;
                                continue;
                            }
                            //console.log("-> " + item[key] + "  " + scope.filterInputValues[indexFilter]);
                            if(new RegExp(scope.filterInputValues[indexFilter]).test(item[key])){
                                return true;
                           }

                           //console.log(" valor folter " + scope.filterInputValues[indexFilter]);
                           // console.log(key, item[key]);
                            if (item.hasOwnProperty(key)){
                               // console.log(key, item[key]);
                            }
                            indexFilter++;
                        }
                        return false;
                    });

                };
                
                scope.lengthColumn = 0;
                scope.paginationButton = 0;

                //este me dice cual pagina corro
                scope.actualIndex = 0;

                //defino el max page si no viene desde la directiva html
                if (scope.maxpage === undefined || scope.maxpage === null || isNaN(scope.maxpage)) {
                    scope.maxpage = 10;
                }
 
                //consigo la cnatidad de columnas en la tabla
                if (scope.values.length <= 0) {
                    console.warn("el valor de la tabla esta vacio");
                } else {
                    scope.lengthColumn = Object.keys(scope.values[0]).length;
                    scope.paginationButton = Math.floor(scope.values.length / scope.maxpage);
                }

                scope.onchangePage = function(index){
                    scope.actualIndex = index;
                };

                scope.onFilter = function(){
                    scope.filterTable();
                }

              
              
            },
            template: `<div>  
  <simple-loader show-ajax="false">          
        
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

    <div class="btn-toolbar" role="toolbar" >
      <div class="btn-group pull-right">
          <ul class="pagination" style="margin: 0;">
                <li ng-repeat="n in [].constructor(paginationButton) track by $index">
                    <a ng-click="onchangePage($index)" href="javascript:void(0)">{{$index + 1}}</a>
                </li>
          </ul>
      </div>
      <div>
        <button class="btn btn-success" >Agregar</button>
        <button class="btn btn-danger" style="margin-left: 10px;" >Eliminar</button>
      </div>
      
    </div>

   </simple-loader> 
  </div>`,
            restrict: 'AE'
        };
    });
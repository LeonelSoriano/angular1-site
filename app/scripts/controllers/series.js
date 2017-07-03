'use strict';

/**
 * @ngdoc function
 * @name angular1SiteApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the angular1SiteApp
 */
angular.module('angular1SiteApp')
    .controller('SeriesCtrl', ['$scope', 'getResourcesFireBase', function($scope,
            getResourcesFireBase) {


            $scope.dialogCreate = {};

            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.mycont = true;
            $scope.values = [];

            getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                $scope.values = value;
            });


            $scope.modelSeriesTypes = [];
            $scope.modelSeriesSelect = 'NULL';
            getResourcesFireBase.getAll("config/option_serie_type", null).then(function(values) {
                $scope.modelSeriesTypes = values;
            });




            $scope.onRemove = function(event) {
                console.log("removiendo desde el controller");
            }
            $scope.onAdd = function(selected) {
                $scope.dialogCreate.open();
            }

            $scope.onUpdate = function(selected) {
                console.log(selected);
            }

            $scope.dialogModel = {};

            $scope.btnclick = function() {
                $scope.dialogModel.open();
                /*     if($scope.mycont === true){
                    $scope.mycont = false;
                 }
                else{
        
                    $scope.mycont = true;
                }
                   */
            }


        }


    ]);
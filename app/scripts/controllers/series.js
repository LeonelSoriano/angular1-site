'use strict';

/**
 * @ngdoc function
 * @name angular1SiteApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the angular1SiteApp
 */
angular.module('angular1SiteApp')
    .controller('SeriesCtrl', ['$scope','getResourcesFireBase', function($scope,
        getResourcesFireBase) {
           
    
           
           
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.mycont = true;
            $scope.values = [];

            getResourcesFireBase.someMethod("series",["gender","name","description"]).then(function(value){
                //console.log(value);
                $scope.values = value;
            });





            $scope.onRemove = function(event){
                console.log("removiendo desde el controller");
            }
            $scope.onAdd = function(selected){
                console.log("agregando un item");
            }

            $scope.onUpdate = function(selected){
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
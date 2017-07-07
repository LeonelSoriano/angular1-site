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

            //este mapea los evento y funcionalidades del dialogo de creado
            $scope.dialogCreate = {};

            

$scope.user = {
    firstName: "Scott",
    lastName: "Allen"
};
 
$scope.originalUser = angular.copy($scope.user);
 
$scope.reset = function(){
    $scope.user = angular.copy($scope.originalUser);
    $scope.editUserForm.$setPristine();
};


            
            //este es el modelo del dialog del create
            $scope.modelCreate = {
                email: 'NULL',
                name: '',
                description: '',
            };

            $scope.mycont = true;
            $scope.values = [];

            getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                $scope.values = value;
            });


            $scope.modelSeriesTypes = [];
            getResourcesFireBase.getAll("config/option_serie_type", null).then(function(values) {
                $scope.modelSeriesTypes = values;
            });

        //getResourcesFireBase.save("hola");


            $scope.onRemove = function(event) {
                console.log("removiendo desde el controller");
            };

            $scope.onAdd = function() {

                $scope.modelCreate = {
                    type: '',
                    name: '',
                    description: '',
                };
                
                
              //  console.log(serieCreate.nameSerieCreate);
               // $('#form-create').trigger("reset");
                $scope.dialogCreate.open();
            };

          

            $scope.onUpdate = function(selected) {
                console.log(selected);
            };

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
            };

        }


    ]);

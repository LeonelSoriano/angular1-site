'use strict';

/**
 * @ngdoc function
 * @name angular1SiteApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the angular1SiteApp
 */
angular.module('angular1SiteApp')
    .controller('SeriesCtrl', ['$scope','$firebaseArray', function($scope,$firebaseArray) {
           
    
           
           
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.mycont = true;
            $scope.values = [{ id: '1', nombre: 'leonel', apellido: 'ape' }
            , { id: '2', nombre: 'sorianmo', apellido: 'ape' },{ id: '3', nombre: 'leonel', apellido: 'ape' },
            { id: '4', nombre: 'leonel', apellido: 'ape' },{ id: '5', nombre: 'leonel', apellido: 'ape' },
            { id: '6', nombre: 'leonel', apellido: 'ape' },{ id: '7', nombre: 'leonel', apellido: 'ape' },
            { id: '8', nombre: 'leonel', apellido: 'ape' },{ id: '9', nombre: 'leonel', apellido: 'ape' }];

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

         /*const rootRef = firebase.database().ref().child('series');
        
        this.object = $firebaseArray(rootRef);
   
this.object.$ref().once('value', function(snap) {
    angular.forEach(snap.val(), function(index) {
        console.log(index.gender)
    })
})*/







            
        }

    ]);
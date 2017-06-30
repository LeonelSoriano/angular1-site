'use strict';

/**
 * @ngdoc function
 * @name angular1SiteApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the angular1SiteApp
 */
angular.module('angular1SiteApp')
    .controller('SeriesCtrl', ['$scope', function($scope) {
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

             
             $scope.btnclick = function() {
               
                 if($scope.mycont === true){
                    $scope.mycont = false;
                 }
                else{
        
                    $scope.mycont = true;
                }
                   
             }
        }

    ]);
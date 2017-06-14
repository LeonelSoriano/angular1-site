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

            $scope.values = [{ id: '1', nombre: 'leonel', apellido: 'ape' }, { id: '2', nombre: 'sorianmo', apellido: 'ape' }];
        }

    ]);
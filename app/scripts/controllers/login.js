'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angular1App
 */
angular.module('angular1SiteApp')
    .controller('LoginCtrl', ['$scope', '$firebaseAuth', '$window', '$cookies', function($scope,
         $firebaseAuth, $window, $cookies) {

        var auth = $firebaseAuth();

        $scope.submidLogin = function(userLogin) {

            if (userLogin.$valid) {
                $scope.loading = true;

                auth.$signInWithEmailAndPassword(userLogin.email.$viewValue, userLogin.password.$viewValue).then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                    $window.location.href = '#/main';
                }).catch(function(error) {
                    console.log("Authentication failed:", error);
                }).finally(function() {
                    $scope.loading = false;
                });
            }


        };

    }]);

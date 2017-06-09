'use strict';

/**
 * @ngdoc function
 * @name angular1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angular1App
 */
angular.module('angular1SiteApp')
    .controller('LoginCtrl', ['$scope', '$firebaseAuth', '$window', '$cookies', '$routeParams', '$location',
        function($scope, $firebaseAuth, $window, $cookies, $routeParams, $location) {

            $scope.msg = $routeParams.unautorizated;

            var auth = $firebaseAuth();

            $scope.submidLogin = function(userLogin) {

                if (userLogin.$valid) {
                    $scope.loading = true;

                    auth.$signInWithEmailAndPassword(userLogin.email.$viewValue, userLogin.password.$viewValue).then(function(firebaseUser) {
                        console.log("Signed in as:", firebaseUser.uid);

                        console.log("Signed in as:", firebaseUser);

                        var userLoginJson = {
                            email: firebaseUser.email,
                            uid: firebaseUser.uid,
                            refreshToken: firebaseUser.refreshToken
                        };

                        $cookies.put('userLoger', userLoginJson);

                        $location.path('main');

                    }).catch(function(error) {
                        console.log("Authentication failed:", error);
                    }).finally(function() {
                        $scope.loading = false;
                    });
                }


            };

        }
    ]);
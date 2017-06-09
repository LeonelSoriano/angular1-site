'use strict';

/**
 * @ngdoc overview
 * @name angular1App
 * @description
 * # angular1App
 *
 * Main module of the application.
 */
angular
    .module('angular1SiteApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase',
        'ui.bootstrap'
    ])
    .config(function($routeProvider, $locationProvider) {


        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            }).when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/series', {
              templateUrl: 'views/series.html',
              controller: 'SeriesCtrl',
              controllerAs: 'series'
            })
            .otherwise({
                redirectTo: '/'
            });


    }).
run(function($rootScope, $location, $cookies) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {

        var $cookies;
        angular.injector(['ngCookies']).invoke(['$cookies', function(_$cookies_) {
            $cookies = _$cookies_;
        }]);
        if ($location.path() !== '/login') {

            if ($cookies.get('userLoger') === undefined || $cookies.get('userLoger') === null) {
                $location.path("/login").search({ unautorizated: "true" });;
            }
        }

    });
});
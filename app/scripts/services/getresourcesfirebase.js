'use strict';

/**
 * @ngdoc service
 * @name angular1SiteApp.getResourcesFireBase
 * @description
 * # getResourcesFireBase
 * Factory in the angular1SiteApp.
 */
angular.module('angular1SiteApp')
    .factory('getResourcesFireBase', ["$firebaseArray", function($firebaseArray) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            getAll: function(ref, normalize) {
                    const rootRef = firebase.database().ref().child(ref);
                    this.object = $firebaseArray(rootRef);
                    var self = this;
                    /*var hola =  Promise(function(resolve, reject) {
                    	self.object.$ref().once('value', function(snap) {
                    		angular.forEach(snap.val(), function(index) {
                    			resolve(index);
                    		})
                    	})
                    });*/

                    return new Promise(function(resolve) {
                        var responseValues = [];
                        self.object.$ref().once('value', function(snap) {
                            console.log(snap.val());
                            angular.forEach(snap.val(), function(value, key) {
                                var tmpValue = {};
                                tmpValue.id = key;
                                if (normalize === undefined || normalize === null) {
                                    for (var key in value) {
                                        tmpValue[key] = value[key];
                                    }
                                } else {
                                    normalize.forEach(function(valIndex) {
                                        if (value[valIndex] === undefined) {
                                            tmpValue[valIndex] = '';
                                        } else {
                                            tmpValue[valIndex] = value[valIndex];
                                        }

                                    });
                                }

                                responseValues.push(tmpValue);
                            });


                            // for (var prop in value) {
                            resolve(responseValues);
                        })
                    });




                } //end get store


        };
    }]);
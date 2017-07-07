'use strict';

/**
 * @ngdoc service
 * @name angular1SiteApp.getResourcesFireBase
 * @description
 * # getResourcesFireBase
 * Factory in the angular1SiteApp.
 */
angular.module('angular1SiteApp')
    .factory('getResourcesFireBase', ["$firebaseArray", "$firebaseObject", function($firebaseArray, $firebaseObject) {

        return {

            remove: function(ref, id, success, error) {
                firebase.database().ref().child(ref).child(id).remove().then(function(ref) {
                    console.log("Eliminado correctamente");
                    if (success !== undefined && success !== null) {
                        success();
                    }

                }, function(error) {
                    console.log("error en guadar " + error);
                    if (error !== undefined && error !== null) {
                        error();
                    }
                });

            },
            save: function(ref, data, success, error) {
                firebase.database().ref().child(ref).push(
                    data
                ).then(function(ref) {
                    console.log("bien " + ref.key);
                    if (success !== undefined && success !== null) {
                        success();
                    }
                }, function(error) {
                    console.log("error en guadar " + error);
                    if (error !== undefined && error !== null) {
                        error();
                    }
                });
            },
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
                            //console.log(snap.val());
                            angular.forEach(snap.val(), function(value, key) {
                                var tmpValue = {};
                                tmpValue.id = key;
                                if (normalize === undefined || normalize === null) {
                                    for (var tmpKey in value) {
                                        tmpValue[tmpKey] = value[tmpKey];
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

                            resolve(responseValues);
                        });
                    });




                } //end get store


        };
    }]);
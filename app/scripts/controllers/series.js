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

            //modelo del formulario de crear
            $scope.forms = {};

            //para evitar guardar dos vecez este lo seteo antes de los ventos de guardar
            $scope.saveButtonDisable = false;

            $scope.user = {
                firstName: "Scott",
                lastName: "Allen"
            };

            var formsSerieCreate = null
            $scope.$watch('forms.serieCreate', function(form) {
                if (form) {
                    formsSerieCreate = form;
                }
            });

            //este es el modelo del dialog del create
            $scope.modelCreate = {
                gender: '',
                name: '',
                description: '',
            };

            $scope.mycont = true;
            $scope.values = null;

            getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                $scope.values = value;
            });


            $scope.modelSeriesTypes = [];
            getResourcesFireBase.getAll("config/option_serie_type", null).then(function(values) {
                $scope.modelSeriesTypes = values;
            });

            //getResourcesFireBase.save("hola");


            $scope.onRemove = function(event) {

                $scope.saveButtonDisable = true;

                getResourcesFireBase.remove("series", event, function() {


                        swal({
                            title: 'Eliminado',
                            text: 'Eliminado Correctamente',
                            timer: 1200,
                            type: 'success'
                        }).then(
                            function() {

                                getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                                    console.log(value);
                                    $scope.values = value;
                                });
                                $scope.saveButtonDisable = false;
                            },

                            function(dismiss) {
                                if (dismiss === 'timer') {

                                    getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                                        $scope.values = value;
                                    });
                                    $scope.saveButtonDisable = false;

                                }
                            });

                    },
                    function() {
                        swal({
                            title: "Error",
                            text: 'no se pudo eliminar la serie',
                            type: 'error'
                        });
                        $scope.saveButtonDisable = false;
                    });
            };



            $scope.onAdd = function() {

                $scope.modelCreate = {
                    type: '',
                    name: '',
                    description: '',
                };
                if (formsSerieCreate !== null) {
                    formsSerieCreate.$setPristine();
                }
                $scope.dialogCreate.open();
            };


            $scope.onUpdate = function(selected) {
                console.log(selected);
            };

            $scope.dialogSave = function() {
                $scope.saveButtonDisable = true;
                getResourcesFireBase.save("series", $scope.modelCreate, function() {
                        $scope.dialogCreate.close();
                        swal({
                            title: 'Guardado',
                            text: 'serie creada sastifactoriamente',
                            timer: 1200,
                            type: 'success'
                        }).then(
                            function() {

                                getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                                    console.log(value);
                                    $scope.values = value;
                                });
                                $scope.saveButtonDisable = false;
                            },

                            function(dismiss) {
                                if (dismiss === 'timer') {

                                    getResourcesFireBase.getAll("series", ["gender", "name", "description"]).then(function(value) {
                                        console.log(value);
                                        $scope.values = value;
                                    });
                                    $scope.saveButtonDisable = false;

                                }
                            });


                    },
                    function() {
                        swal({
                            title: "Error",
                            text: 'no se pudo guardar la serie',
                            type: 'error'
                        });
                        $scope.saveButtonDisable = false;
                    });





            };

        }


    ]);
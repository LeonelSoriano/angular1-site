'use strict';

/**
 * @ngdoc directive
 * @name angular1SiteApp.directive:boostrapDialog
 * @description
 * # boostrapDialog
 */
angular.module('angular1SiteApp')
    .directive('boostrapDialog', function() {
        return {
            scope: {
                typeDialog: '@',
                title: '@',
                dialogModel: '=',
                modalId: '@',
            },
            transclude: true,
            replace: true,

            link: function(scope, element, attrs) {

                if (scope.modalId === undefined) {
                    throw "problema en el dialogo debe tener obligatoria mente un id";
                } else {

                    if (attrs.typeDialog === undefined || (attrs.typeDialog != 'lg' && attrs.typeDialog != 'sm')) {
                        attrs.typeDialog = 'lg';
                    }
                    attrs.typeDialog = 'modal-' + attrs.typeDialog;


                    scope.dialogModel.open = function() {
                        $('#' + scope.modalId).modal('show');
                    }

                    scope.dialogModel.close = function() {
                        $('#' + scope.modalId).modal('hide');
                    }

                } //end else
            },
            template: `<div>      
  <div class="modal fade" id="{{modalId}}" role="dialog">
    <div class="modal-dialog {{typeDialog}}">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
          <ng-transclude></ng-transclude>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>  
      </div>`,
            restrict: 'E',
        };
    });
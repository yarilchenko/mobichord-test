(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .controller('IncidentDetailsController', IncidentDetailsController);

  /** @ngInject */
  function IncidentDetailsController($scope, $mdDialog, STATE_FLAG,item) {
    $scope.item = item;
    $scope.state = STATE_FLAG;

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
})();

(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .controller('IncidentDetailsController', IncidentDetailsController);

  /** @ngInject */
  function IncidentDetailsController($scope, $mdDialog,item) {
    $scope.item = item;

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
})();

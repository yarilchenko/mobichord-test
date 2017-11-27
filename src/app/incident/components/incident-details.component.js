(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .controller('IncidentDetailsController', IncidentDetailsController);

  /** @ngInject */
  function IncidentDetailsController($mdDialog, item) {
    var vm = this;
    vm.item = item;

    vm.cancel = function() {
      $mdDialog.cancel();
    };
  }
})();

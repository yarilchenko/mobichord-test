(function () {
  'use strict';

  angular.module('mobichordTest')
    .component('incidentList', {
      templateUrl: 'app/incident/components/incident-list.html',
      controller: IncidentListController,
      bindings: {
        incidents: '<',
        loadMore: '<'
      }
    });

  /** @ngInject */
  function IncidentListController($mdDialog, moment) {
    var vm = this;

    vm.filter = {};
    vm.moment = moment;

    /**
     * TODO: move this stuff to separate file (filters folder)
     */
    vm.search = function(item) {
      return (!vm.filter.keyword
        || ~(item.number.display_value.toLowerCase().indexOf(vm.filter.keyword.toLowerCase()))
        || ~(item.caller_id.display_value.toLowerCase()).indexOf(vm.filter.keyword.toLowerCase()) )
    };

    vm.showDetails = function (incident) {
      $mdDialog.show({
        controller: 'IncidentDetailsController',
        templateUrl: 'app/incident/components/incident-details.html',
        locals: {
          item: incident
        }
      })
    };

  }

})();

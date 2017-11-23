(function () {
  'use strict';

  angular.module('mobichordTest')
    .component('incidentList', {
      templateUrl: 'app/incident/components/incident-list.html',
      controller: IncidentListController,
      bindings: {
        users: '<',
        incidents: '<',
        loadMore: '<'
      }
    });

  /** @ngInject */
  function IncidentListController(STATE_FLAG, $mdDialog, moment) {
    var vm = this;

    vm.flags = STATE_FLAG;
    vm.filter = {};
    vm.moment = moment;

    /**
     * TODO: move this stuff to separate file (filters folder)
     */
    vm.search = function(item) {
      if (!vm.filter.keyword
        || (item.number.toLowerCase().indexOf(vm.filter.keyword.toLowerCase()) != -1)
        || ((item.user.result.first_name.toLowerCase() + ' ' + item.user.result.last_name.toLowerCase()).indexOf(vm.filter.keyword.toLowerCase()) != -1) ){
        return true;
      }
      return false;
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

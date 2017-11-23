(function () {
  'use strict';

  angular.module('mobichordTest')
    .component('dashboard', {
      templateUrl: 'app/dashboard/components/dashboard.html',
      controller: DashboardController
    });

  /** @ngInject */
  function DashboardController(IncidentService, UserService, StatsService, _, moment) {
    var vm = this;
    vm.users = {};
    vm.incidents = [];
    /**
     * TODO: better to patch factory with this flag
     */
    vm.busy = true;

    vm.incidentsCount = StatsService.get({count: true});

    vm.$onInit = function () {
      getIncidents();
    };

    vm.loadMore = function() {
      if(!vm.busy || vm.incidents.length < vm.incidentsCount) {
        getIncidents(vm.incidents.length);
      }
    };

    vm.sizeOf = function (obj) {
      return Object.keys(obj).length;
    };

    function getIncidents(offset) {
      offset = offset || 0;
      vm.busy = true;
      IncidentService.get({offset: offset})
        .$promise
        .then(function(data) {
          vm.incidents = _.concat(vm.incidents, data.result);
          vm.lineChartData = _(vm.incidents)
              .groupBy(monthYear)
              .value();
          data.result.forEach(function (incident) {
            var userId = incident.caller_id.value;
            vm.users[userId] = UserService.get(userId);
          });
          vm.busy = false;
        });
    }

    function monthYear(item) {
      return moment(item.opened_at).format('YYYY MMM DD');
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .component('doughnutChart', {
      templateUrl: 'app/charts/components/doughnut-chart.html',
      controller: DoughnutChartController
    });

  /** @ngInject */
  function DoughnutChartController(StatsService, STATE_FLAG) {
    var vm = this;

    vm.labels = [];
    vm.data = [];
    vm.flags = STATE_FLAG;

    vm.$onInit = function () {
      StatsService.get({
          table: 'incident',
          groupBy: 'state',
          count: true
        })
        .$promise
        .then(function (data) {
          data.result.forEach(function (result) {
            vm.data.push(result.stats.count);
            vm.labels.push(STATE_FLAG[result.groupby_fields[0].value]);
          });
        });
    };
  }
})();

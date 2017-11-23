(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .component('lineChart', {
      templateUrl: 'app/charts/components/line-chart.html',
      controller: LineChartController,
      bindings: {
        data: '<'
      }
    });

  /** @ngInject */
  function LineChartController(moment) {
    var vm = this;
    vm.dataSet = [[]];
    vm.labels = [];

    vm.$onInit = function () {
      Object.keys(vm.data).sort(function(a, b) {
        return moment(a, 'YYYY MMM DD').toDate() - moment(b, 'YYYY MMM DD').toDate();
      }).forEach(function(key) {
        vm.labels.push(key);
        vm.dataSet[0].push(vm.data[key].length);
      })
    };
  }
})();

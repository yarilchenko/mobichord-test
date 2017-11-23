(function () {
  'use strict';

  angular.module('mobichordTest')
    .factory('StatsService', StatsService);

  /** @ngInject */
  function StatsService($resource) {
    return $resource('https://dev10996.service-now.com/api/now/v1/stats/:table?sysparm_count=:count&sysparm_query=:query&sysparm_group_by=:groupBy',
      {
        table: 'incident',
        query: 'active=true',
        count: false
      });
  }
})();

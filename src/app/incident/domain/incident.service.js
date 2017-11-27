(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .factory('IncidentService', IncidentService);

  /** @ngInject */
  function IncidentService($resource) {
    return $resource('https://dev10996.service-now.com/api/now/v1/table/incident?sysparm_display_value=:displayValue&sysparm_limit=:limit&sysparm_query=:query&sysparm_offset=:offset',
      {
        limit: 100,
        query: 'active=true',
        offset: 0,
        displayValue: 'all'
      });
  }
})();

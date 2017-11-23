(function() {
  'use strict';

  angular.module('mobichordTest').config(DashboardRouterConfig);

  /** @ngInject */
  function DashboardRouterConfig($stateProvider) {
    $stateProvider.state('app.dashboard', {
      url: '/dashboard',
      views: {
        '@': {
          component: 'dashboard'
        }
      }
    });
  }

})();

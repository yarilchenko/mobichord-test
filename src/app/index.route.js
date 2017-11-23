(function() {
  'use strict';

  angular
    .module('mobichordTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      abstract: true,
      views: {
        header: {
          component: 'headerMain'
        },
        '': {
          template: ''
        }
      }
    });

    $urlRouterProvider.otherwise('/dashboard');
  }

})();

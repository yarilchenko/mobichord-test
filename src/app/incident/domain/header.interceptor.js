(function () {
  'use strict';

  angular.module('mobichordTest')
    .factory('AuthHeader', AuthHeaderFactory);

  /** @ngInject */
  function AuthHeaderFactory(serviceNowAuth) {
    return {
      request: function addAuthHeaderToRequest(config) {
        config.headers.Authorization = 'Basic ' + serviceNowAuth;

        return config;
      }
    };
  }

})();

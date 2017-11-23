(function () {
  'use strict';

  angular.module('mobichordTest')
    .factory('AuthHeader', AuthHeaderFactory);

  /** @ngInject */
  function AuthHeaderFactory($base64, serviceNowAuth) {
    return {
      request: function addAuthHeaderToRequest(config) {
        config.headers.Authorization = 'Basic ' + $base64.encode(serviceNowAuth.username + ':' + serviceNowAuth.password);

        return config;
      }
    };
  }

})();

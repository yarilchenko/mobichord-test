(function() {
  'use strict';

  angular
    .module('mobichordTest')
    .config(config);

  /** @ngInject */
  function config($httpProvider, $logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('grey');

    //Set Authorization header to all request's
    $httpProvider.interceptors.push('AuthHeader');
  }

})();

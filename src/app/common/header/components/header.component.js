(function () {
  'use strict';

  angular.module('mobichordTest')
    .component('headerMain', {
      templateUrl: 'app/common/header/components/header.html',
      controller: HeaderController
    });

  /** @ngInject */
  function HeaderController() {
    var vm = this;

    vm.$onInit = function () {

    };
  }

})();

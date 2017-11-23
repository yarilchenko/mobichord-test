(function() {
  'use strict';

  angular
    .module('mobichordTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

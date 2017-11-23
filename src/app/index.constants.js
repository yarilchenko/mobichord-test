/* global malarkey:false, moment:false */
(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('_', _)
    .constant('serviceNowAuth', {
      username: 'admin',
      password: 'Sphinx4815162342'
    })
    .constant('STATE_FLAG', {
      '1': 'New',
      '2': 'In Progress',
      '3': 'On Hold'
    });

})();

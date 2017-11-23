(function () {
  'use strict';

  angular
    .module('mobichordTest')
    .factory('UserService', UserService);

  /** @ngInject */
  function UserService($resource) {
    return {
      users: {},
      get: function(userId) {
        if(this.users[userId]) return this.users[userId];

        // return this.users;
        return $resource('https://dev10996.service-now.com/api/now/v1/table/sys_user/'+userId).get();
      }
    };

    // return $resource('https://dev10996.service-now.com/api/now/v1/table/sys_user/:id');
  }
})();

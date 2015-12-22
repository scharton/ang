(function() {
  'use strict';

  angular
    .module('angPodcast')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

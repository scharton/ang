(function() {
  'use strict';

  angular
    .module('angPodcast')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
        .state('podcast', {
          url: '/podcast',
          templateUrl: 'app/podcast/podcast.html',
          controller: 'PodcastController',
          controllerAs: 'podcast'
        });

    $urlRouterProvider.otherwise('/');
  }

})();

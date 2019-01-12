angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('whatAreOurCourses', {
    url: '/page2',
    templateUrl: 'templates/whatAreOurCourses.html',
    controller: 'whatAreOurCoursesCtrl'
  })

  .state('contactUs', {
    url: '/page4',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page7',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

$urlRouterProvider.otherwise('/page7')


});
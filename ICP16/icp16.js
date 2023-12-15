// Created an AngularJS module named 'spa' and used 'ngRoute' dependency
let app = angular.module('spa', ['ngRoute']);

// HTML content
let htmlHome = '<h2>Home</h2><p>This is the home page</p>';
let htmlAbout = '<h2>About</h2><p>This is the about page</p>';
let htmlServices = '<h2>Services</h2><p>This is the services page</p>';
let htmlProjects = '<h2>Projects</h2><p>This is the projects page</p>';

// routing
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      template: htmlHome.replace(/<page>/g, 'Home')
    })
    .when('/about', {
      template: htmlAbout.replace(/<page>/g, 'About')
    })
    .when('/services', {
      template: htmlServices.replace(/<page>/g, 'Services')
    })
    .when('/projects', {
      template: htmlProjects.replace(/<page>/g, 'Projects')
    })
    .otherwise({
      redirectTo: '/home'
    });
});

'use strict';

/* global window, document, $ */

$(document).ready(function () {
	//window.console.log($('label'));
	//window.console.log($('label').style);
	//window.console.log($('label').style.pointerEvents);
	//$('label').style.pointerEvents = 'none';
});

/*
 ███████████████████████████████████████████████████████████████████████████
 TRACER
 ███████████████████████████████████████████████████████████████████████████
 */
window.trace = function (str) {
	window.console.log(str);
};

/*
 ███████████████████████████████████████████████████████████████████████████
 ANGULAR APP CONFIG (HTML5MODE, ROUTES)
 ███████████████████████████████████████████████████████████████████████████
 */
var webapp = angular.module('btttsWebapp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'slick', 'angularUtils.directives.dirPagination', 'perfect_scrollbar']).config(['$routeProvider', '$httpProvider', '$locationProvider', '$compileProvider', function ($routeProvider, $httpProvider, $locationProvider, $compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$locationProvider.html5Mode(true).hashPrefix('!');

		var urlRootTemp = window.location.protocol + '//' + document.location.hostname;
		if (window.location.port !== '') {
			urlRootTemp += ':' + window.location.port;
		}
		//urlRootTemp += document.location.pathname;
		urlRootTemp += '/';

		$routeProvider
			.when('/', {
				templateUrl: urlRootTemp + 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/main', {
				templateUrl: urlRootTemp + 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/main/:action', {
				templateUrl: urlRootTemp + 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/signin', {
				templateUrl: urlRootTemp + 'views/signin.html',
				controller: 'SigninCtrl'
			})
			.when('/signin/:message', {
				templateUrl: urlRootTemp + 'views/signin.html',
				controller: 'SigninCtrl'
			})
			.when('/home', {
				templateUrl: urlRootTemp + 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/home/:section', {
				templateUrl: urlRootTemp + 'views/home.html',
				controller: 'HomeCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

/*
 ███████████████████████████████████████████████████████████████████████████
 ANGULAR APP RUN
 ███████████████████████████████████████████████████████████████████████████
 */
webapp.run(['$route', '$rootScope', function ($route, $rootScope) {

	$rootScope.urlRoot = window.location.protocol + '//' + document.location.hostname;
	if (window.location.port !== '') {
		$rootScope.urlRoot += ':' + window.location.port;
	}
	//$rootScope.urlRoot += document.location.pathname;
	$rootScope.urlRoot += '/';
}]);

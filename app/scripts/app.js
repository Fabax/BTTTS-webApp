'use strict';

/* global window, document */

$(document).ready(function () {
	//console.log($('label'));
	//console.log($('label').style);
	//console.log($('label').style.pointerEvents);
	//$('label').style.pointerEvents = 'none';
});

/*
 ███████████████████████████████████████████████████████████████████████████
 TRACER
 ███████████████████████████████████████████████████████████████████████████
 */
window.trace = function (str) {
	//console.log(str);
};

/*
 ███████████████████████████████████████████████████████████████████████████
 ANGULAR APP CONFIG (HTML5MODE, ROUTES)
 ███████████████████████████████████████████████████████████████████████████
 */
var webapp = angular.module('btttsWebapp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(['$routeProvider', '$httpProvider', '$locationProvider', '$compileProvider', function ($routeProvider, $httpProvider, $locationProvider, $compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$locationProvider.html5Mode(true).hashPrefix('!');

		var urlRootTemp = window.location.protocol + '//' + document.location.hostname;
		if (window.location.port !== '') {
			urlRootTemp += ':' + window.location.port;
		}
		urlRootTemp += '/';
		//urlRootTemp += '/2015/XXXX_bttts/';

		$routeProvider.when('/', {
				templateUrl: urlRootTemp + 'views/main.html', controller: 'MainCtrl'
			}).when('/about', {
				templateUrl: urlRootTemp + 'views/about.html', controller: 'AboutCtrl'
			}).otherwise({
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
	$rootScope.urlRoot += '/';
	//$rootScope.urlRoot += '/2015/XXXX_bttts/';
}]);

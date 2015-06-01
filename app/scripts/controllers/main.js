'use strict';

/*global webapp, window*/

/**
 * @ngdoc function
 * @name btttsWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btttsWebappApp
 */
webapp.controller('MainCtrl', ['$scope', function ($scope) {
	//$scope.login_id = {};

	$scope.submitLogin = function () {
		window.trace('SUBMIT LOGIN');
	};
}]);

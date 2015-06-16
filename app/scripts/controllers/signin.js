'use strict';

/**
 * @ngdoc function
 * @name btttsWebapp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the btttsWebappApp
 */
webapp.controller('SigninCtrl', ['$routeParams', '$scope', function ($routeParams, $scope) {
	$scope.message = null;

	if($routeParams.message !== undefined) {
		$scope.message = $routeParams.message;
	}
}]);

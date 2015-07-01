'use strict';

/*global webapp, $*/

webapp.directive('slopeParts', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		scope: {

		},
		link: function ($scope, element, attrs) {
			var slope_parts = $('slope_parts');


		},
		controller: function($rootScope, $scope) {
		},
		templateUrl: $rootScope.urlRoot + 'templates/slope_parts.html'
	};
}]);

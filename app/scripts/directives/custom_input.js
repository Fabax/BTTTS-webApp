'use strict';

/*global webapp, $*/

webapp.directive('customInput', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		scope: {
			inputType: '@',
			inputClass: '@',
			placeholder: '@',
			parsleyType : '@',
			required: '@',
			asterisk: '@',
			help: '@',
			minLenght : '@',
			tooltipContent : '@'
		},
		link: function ($scope, element, attrs) {
			//$(this).find('label').html('');
			//
			//element.bind('click', function () {
			//	$(this).find('input').focus();
			//});
			//
			//element.find('input').bind('keyup change blur focus', function () {
			//	console.log('BOUM');
			//	updateInput($(this));
			//});
		},
		controller: function($scope) {
			//console.log($scope.inputClass);
			//console.log($scope.labelContent);
			//console.log($scope.required);
			//console.log($scope.parsleytype);
			//console.log($scope.required);

			$scope.asterisk = ($scope.required === 'true') ? '*' : '';
		},
		templateUrl: $rootScope.urlRoot + 'templates/custom_input.html'
	};
}]);

'use strict';

/*global webapp, window*/

/**
 * @ngdoc function
 * @name btttsWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btttsWebappApp
 */

webapp.controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

	$scope.signinFormErrors = false;
	$scope.signinFormErrorsList = false;
	$scope.signinForm = null;

	$scope.submitLogin = function () {
		window.trace('SUBMIT LOGIN');
	};

	$scope.initSigninFrom = function(){
		$scope.signinForm = $('.signingInForm').parsley();

		$scope.signinForm.subscribe('parsley:form:validated', function (formInstance) {
			var isValid = formInstance.validationResult;

			$timeout(function() {
				$scope.$apply(function() {
					$scope.signinFormErrors = !isValid;
				});
			});

			$scope.signinFormErrorsList = "";

			if(isValid){
				window.trace("good to go");
			}else{
				for (var i = 0; i < $scope.signinForm.fields.length; i++) {

					var currentField  = $scope.signinForm.fields[i].validate();

					if(currentField === true){
						window.trace('field : '+i+' ok');
					}else{
						if($scope.signinFormErrorsList !== '') {
							$scope.signinFormErrorsList += ', '
						}
						$scope.signinFormErrorsList += $scope.signinForm.fields[i].$element.parent().find('label').find('.content').text();
					}
				}
				window.trace($scope.signinFormErrorsList);
			}
		});
	};
}]);

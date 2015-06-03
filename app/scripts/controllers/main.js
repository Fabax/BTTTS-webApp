'use strict';

/*global webapp, window*/

/**
 * @ngdoc function
 * @name btttsWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btttsWebappApp
 */

webapp.controller('MainCtrl', ['$scope', '$timeout','FormsFactory', function ($scope, $timeout, FormsFactory) {

	$scope.signinFormErrors = false;
	$scope.signinFormErrorsList = false;
	$scope.signinForm = null;
	$scope.signinUser = {};

	$scope.submitLogin = function () {
		window.trace('SUBMIT LOGIN');
	};

	var addUser = function(){

		var json = $scope.signinUser;

		FormsFactory.addUser(json).then(function(data) {
			if(data.Result === 'OK') {

			}
		}, function(msg) {
			window.trace(msg);
		});
	};

	$scope.initSigninFrom = function(){
		$scope.signinForm = $('.signingInForm').parsley();

		$scope.signinForm.subscribe('parsley:form:validated', function (formInstance) {
			var isValid = formInstance.validationResult;

			$timeout(function() {
				$scope.$apply(function() {
					$scope.signinFormErrors = !isValid;
					window.trace($scope.signinUser);
				});
			});

			$scope.signinFormErrorsList = "";

			if(isValid){
				addUser();

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

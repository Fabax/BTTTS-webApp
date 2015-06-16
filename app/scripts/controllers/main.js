'use strict';

/*global webapp, window, $*/

/**
 * @ngdoc function
 * @name btttsWebapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the btttsWebapp
 */

webapp.controller('MainCtrl', ['$routeParams', '$scope', '$timeout','FormsFactory', function ($routeParams, $scope, $timeout, FormsFactory) {
	$scope.loggingIn = false;
	$scope.signingIn = false;

	if($routeParams.action !== undefined) {
		switch ($routeParams.action) {
			case 'login' :
				$scope.loggingIn = true;
				break;
			case 'signin' :
				$scope.signingIn = true;
				break;
			default:
				break;
		}
	}

	$scope.signinFormErrors = false;
	$scope.signinFormErrorsList = false;
	$scope.signinForm = null;
	$scope.signinUser = {
		idCard : '712',
		nickname : 'FuFu',
		email : 'phuezj@proximity.bbdo.fr',
		pwd : 'glop'
	};

	$scope.submitLogin = function () {
		window.trace('SUBMIT LOGIN');
	};

	var addUser = function(){

		var json = $scope.signinUser;

		FormsFactory.addUser(json).then(function(data) {
			window.console.log(data);
			if(data.message === 'success') {
				window.console.log('USER ADDED');
				$location.path('/signin/congrats');
			}
		}, function(msg) {
			window.trace(msg);
		});
	};

	$scope.submitSigninFrom = function(){
		window.trace('submitSigninFrom');

		$scope.signinForm = $('.signingInForm').parsley();

		$scope.signinForm.subscribe('parsley:form:validated', function (formInstance) {
			var isValid = formInstance.validationResult;

			$timeout(function() {
				$scope.$apply(function() {
					$scope.signinFormErrors = !isValid;
					window.trace($scope.signinUser);
				});
			});

			$scope.signinFormErrorsList = '';

			if(isValid){
				addUser();
			} else {
				for (var i = 0; i < $scope.signinForm.fields.length; i++) {

					var currentField  = $scope.signinForm.fields[i];
					var inputContent = currentField.$element;
					var errorlabel = currentField.$element.parent().attr('placeholder');

					if(currentField.validate() === true){
						window.trace('field : ' + i + ' ok');

						inputContent.removeClass('error');
						//errorlabel.removeClass('error');
					}else{
						window.trace('field : ' + i + ' nok');

						if($scope.signinFormErrorsList !== '') {
							$scope.signinFormErrorsList += ', ';
						}

						inputContent.addClass('error');
						//errorlabel.addClass('error');
						$scope.signinFormErrorsList += errorlabel;
					}
				}
				window.trace($scope.signinFormErrorsList);
			}
		});
	};
}]);

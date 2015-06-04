'use strict';

/*global webapp, window, $*/

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
	$scope.signinUser = {
		//idCard : '712',
		//lastname : 'Phuez',
		//firstname : 'Julien',
		//nickname : 'FuFu',
		//email : 'phuezj@proximity.bbdo.fr',
		//pwd : 'glop'
	};

	$scope.submitLogin = function () {
		window.trace('SUBMIT LOGIN');
	};

	var addUser = function(){

		var json = $scope.signinUser;

		FormsFactory.addUser(json).then(function(data) {
			console.log(data);
			if(data.message === 'success') {
				console.log('USER ADDED');
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

			$scope.signinFormErrorsList = '';

			if(isValid){
				addUser();
			}else{
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

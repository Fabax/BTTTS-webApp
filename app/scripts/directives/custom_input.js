webapp.directive('customInput', function() {
		return {
			restrict: 'E',
			scope: {
				inputType: '@',
				inputClass: '@',
				labelContent: '@'
			},
			link: function ($scope, element, attrs) {
				element.bind('click', function () {
					$(this).find('input').focus();
				});

				element.find('input').keyup(function () {
					var len = $(this).val().length;

					if(len === 0) {
						$(this).parent().find('label').show();
					} else {
						$(this).parent().find('label').hide();
					}
				});
			},
			controller: function($scope) {
				//console.log($scope.inputClass);
				//console.log($scope.labelContent);
			},
			templateUrl: '../../templates/custom_input.html'
		};
	});
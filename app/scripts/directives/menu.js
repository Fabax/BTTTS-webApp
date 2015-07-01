'use strict';

/*global webapp, $*/

webapp.directive('menu', ['$rootScope', function($rootScope) {
	return {
		restrict: 'E',
		scope: {

		},
		link: function ($scope, element, attrs) {
			var menu = $('menu'),
				state = false;

			var setState = function (s) {
				state = (s === undefined) ? !state : s;

				if(state) {
					menu.find('.closeButton').find('.icon').removeClass('icon-menu').addClass('icon-close');
					menu.find('ul').css('display', 'inline-block');
				} else {
					menu.find('.closeButton').find('.icon').removeClass('icon-close').addClass('icon-menu');
					menu.find('ul').css('display', 'none');
				}
			};

			menu.find('.closeButton').on('mouseover', function () {
				setState(true);
			});

			menu.find('.closeButton').on('click', function () {
				setState();
			});

			menu.on('mouseleave', function (e) {
				setState(false);
			});
		},
		controller: function($rootScope, $scope) {
		},
		templateUrl: $rootScope.urlRoot + 'templates/menu.html'
	};
}]);

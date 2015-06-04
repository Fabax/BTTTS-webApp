'use strict';

/*global webapp, window*/

webapp.factory('FormsFactory', function($rootScope, $http, $q) {

    var factory = {
        addUser: function(data) {
            var deffered = $q.defer();

	        data.idCard = parseInt(data.idCard);

            window.trace('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
            window.trace(data);
            window.trace('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

            $http.post('https://aqueous-badlands-4811.herokuapp.com/user/add', data)
                .success(function(data, status) {
                    factory.data = data;
                    deffered.resolve(factory.data);
                }).error(function(data, status) {
                    deffered.reject('Impossible de retourner les données');
                });

            return deffered.promise;
        }
    };

    return factory;
});
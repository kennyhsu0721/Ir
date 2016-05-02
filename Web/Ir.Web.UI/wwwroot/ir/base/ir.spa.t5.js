(function () {
	'use strict';
	var irspat5 = angular.module('irspat5', ['ngRoute']);

	irspat5.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/',
			{
				controller: 'Q',
				templateUrl: '../Q'
			})
			.when('/Q',
			{
				controller: 'Q',
				templateUrl: '../Q'
			})
			.otherwise({ redirectTo: '/' });
	}]);

	

	irspat5.controller('Q', function ($scope) {
	});
})();
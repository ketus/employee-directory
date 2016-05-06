(function() {
    'use strict';

    angular.module('app')
        .factory('Employee', ['$resource', function($resource) {

            var Employees = $resource('/api/employees/:id', {
                id: '@id'
            }, {
                getReports: {
                    method: 'GET',
                    url: '/api/employees/:id/reports',
                    isArray: true
                }
            });

            return Employees;

        }]);

}());

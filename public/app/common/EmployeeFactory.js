(function() {
    'use strict';

    angular
        .module('app')
        .factory('Employee', Employee);

        Employee.$inject = ['$resource'];

        function Employee($resource) {
            var Employees = $resource('/api/employees/:id', {
                id: '@id'
            }, {
                get: {
                    method: 'GET',
                    cache: true
                },
                query: {
                    method: 'GET',
                    cache: true,
                    isArray: true
                },
                getRreports: {
                    url: '/api/employees/:id/reports',
                    method: 'GET',
                    cache: true,
                    isArray: true
                }
            });

            return Employees;
        }

}());

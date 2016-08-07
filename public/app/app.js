(function() {
    'use strict';

    angular
        .module('app', [
        'ngTouch',
        'ngRoute',
        'ngAnimate',
        'ngResource'
    ]).config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when('/employees', {
                templateUrl: '/app/employeeList/employeeList.html',
                controller: 'EmployeeListController'
            })
            .when('/employees/:employeeId', {
                templateUrl: '/app/employeeDetails/employeeDetails.html',
                controller: 'EmployeeDetailsController'
            })
            .when('/employees/:employeeId/reports', {
                templateUrl: '/app/employeeReports/employeeReports.html',
                controller: 'EmployeeReportsController',
                controllerAs: 'reports'
            })
            .when('/employees/:employeeId/organogram', {
                templateUrl: '/app/employeeOrganogram/employeeOrganogram.html',
                controller: 'EmployeeOrganogram',
                controllerAs: 'organogram'
            })
            .otherwise({
                redirectTo: '/employees'
            });
    }

}());

(function() {
    'use strict';

    angular.module('app', [
        'ngTouch',
        'ngRoute',
        'ngAnimate',
        'ngResource'
    ]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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
                controller: 'EmployeeReportsController'
            })
            .when('/employees/:employeeId/organogram', {
                templateUrl: '/app/employeeOrganogram/employeeOrganogram.html',
                controller: 'EmployeeOrganogramController',
            })
            .otherwise({
                redirectTo: '/employees'
            });
    }]);

}());

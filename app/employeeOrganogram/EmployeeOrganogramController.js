(function () {
    'use strict';

    angular.module('app')
        .controller('EmployeeOrganogramController', ['$scope', '$routeParams', 'Employee', 'Organogram', '$window', '$timeout',
            function ($scope, $routeParams, Employee, Organogram, $window, $timeout) {

                $scope.selectedEmployee = Employee.get({employeeId: $routeParams.employeeId});

                $scope.organogram = Organogram.get({employeeId: $routeParams.employeeId});

                /*
                TODO
                Temporary fix: refresh page every time user leaves organogram page
                to prevent eventual "10 $digest() iterations reached error".
                To reproduce error, comment out below code and follow instructions in bug-report.txt file.
                */
                $scope.$on('$locationChangeStart', function () {
                    $timeout(function () {
                        $window.location.reload();
                    }, 260);
                });

            }]);

}());
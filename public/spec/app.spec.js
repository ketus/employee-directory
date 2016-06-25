describe('App config', function() {

    var $route;

    beforeEach(module('app'));
    beforeEach(inject(function(_$route_) {
        $route = _$route_;
    }));

    describe('Proper mapping routes to controllers', function() {

        it("Main page (employee list) route", function () {

            expect($route.routes['/employees'].templateUrl).toEqual('/app/employeeList/employeeList.html');
            expect($route.routes['/employees'].controller).toBe('EmployeeListController');
        });

        it("Employee details route", function () {

            expect($route.routes['/employees/:employeeId'].templateUrl).toEqual('/app/employeeDetails/employeeDetails.html');
            expect($route.routes['/employees/:employeeId'].controller).toBe('EmployeeDetailsController');
        });

        it("Employee reports route", function () {

            expect($route.routes['/employees/:employeeId/reports'].templateUrl).toEqual('/app/employeeReports/employeeReports.html');
            expect($route.routes['/employees/:employeeId/reports'].controller).toBe('EmployeeReportsController');
        });

        it("Employee Organogram route", function () {

            expect($route.routes['/employees/:employeeId/organogram'].templateUrl).toEqual('/app/employeeOrganogram/employeeOrganogram.html');
            expect($route.routes['/employees/:employeeId/organogram'].controller).toBe('EmployeeOrganogramController');
        });

        it("\'Otherwise\' route", function () {
            expect($route.routes[null].redirectTo).toEqual('/employees');
        });
    });

});

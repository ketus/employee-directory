describe('App config', function() {

    var $route;

    beforeEach(module('app'));
    beforeEach(inject(function(_$route_) {
        $route = _$route_;
    }));

    describe('Proper mapping routes to controllers', function() {

        it("Main page (employee list) route", function () {

            expect($route.routes['/employees'].templateUrl).toEqual('/app/employeeList/employeeList.html');
            expect($route.routes['/employees'].controller).toBe('EmployeeList');
        });

        it("Employee details route", function () {

            expect($route.routes['/employees/:employeeId'].templateUrl).toEqual('/app/employeeDetails/employeeDetails.html');
            expect($route.routes['/employees/:employeeId'].controller).toBe('EmployeeDetails');
        });

        it("Employee reports route", function () {

            expect($route.routes['/employees/:employeeId/reports'].templateUrl).toEqual('/app/employeeReports/employeeReports.html');
            expect($route.routes['/employees/:employeeId/reports'].controller).toBe('EmployeeReports');
        });

        it("Employee Organogram route", function () {

            expect($route.routes['/employees/:employeeId/organogram'].templateUrl).toEqual('/app/employeeOrganogram/employeeOrganogram.html');
            expect($route.routes['/employees/:employeeId/organogram'].controller).toBe('EmployeeOrganogram');
        });

        it("\'Otherwise\' route", function () {
            expect($route.routes[null].redirectTo).toEqual('/employees');
        });
    });

});

describe('MainController', function() {

    var $location,
        $scope,
        $window;

    beforeEach(module('app'));
    beforeEach(inject(function(_$rootScope_, _$controller_, _$location_) {
        $scope = _$rootScope_.$new();
        $location = _$location_;
        $window = {
            history: {
                back: jasmine.createSpy()
            }
        }

        _$controller_('MainController', {
            $scope: $scope,
            $location: $location,
            $window: $window
        });

    }));

    describe('go() method', function() {

        it('$scope.slider should be empty at the beginning', function() {
            expect($scope.slider).toEqual('');
        });

        it('should change the css class of nv-view element', function() {
            $scope.go('/employees');
            expect($scope.slider).toEqual('slider-left');
        });

        it('should change url by using $location.url()', function() {

            var url = '/employees'
            spyOn($location, 'url');
            $scope.go(url);
            expect($location.url).toHaveBeenCalledWith(url);

        });
    });

    describe('back() method', function() {

        it('$scope.slider should change to slider-right', function() {
            $scope.back();
            expect($scope.slider).toEqual('slider-right');
        });

        it('should call $window.history.back()', function() {
            $scope.back();
            expect($window.history.back).toHaveBeenCalled();
        });

    });
});

describe('Hierarchy service', function() {

    var Hierarchy;

    beforeEach(function() {
        inject(module('app'));
        inject(function(_Hierarchy_) {
            Hierarchy = _Hierarchy_;
        });
    });

    describe('getNestedChildren()', function() {

        xit('should be defined', function() {
            expect(Hierarchy.get).toBeDefined();
        });

    });

});

describe('Employee factory', function() {

    var $httpBackend,
        mockEmployee;

    beforeEach(module('app'));
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        mockEmployee = $injector.get('Employee');
    }));

    it('should make GET request for one employee object.', function() {

        $httpBackend.expectGET('/api/employees/1')
            .respond(200, {
                firstName: 'Charles Montgomery',
                lastName: 'Burns'
            });

        mockEmployee.get({ id: 1 })
            .$promise
            .then(function(result){
                $httpBackend.flush();
                expect(mockEmployee.get).toBeDefined();
                expect(result.firstName).toEqual('Charles Montgomery');
            });

    });

    it('should make GET request for array of employee objects.', function() {

        var requestData = [{
            firstName: 'Charles Montgomery',
            lastName: 'Burns'
        }, {
            firstName: 'Charles Montgomery',
            lastName: 'Burns'
        }, {
            firstName: 'Charles Montgomery',
            lastName: 'Burns'
        }, {
            firstName: 'Charles Montgomery',
            lastName: 'Burns'
        }];

        expect(mockEmployee.query).toBeDefined();

        $httpBackend.expectGET('/api/employees')
            .respond(200, requestData);

        mockEmployee.query().$promise.then(function(result) {

            $httpBackend.flush();
            expect(result).toEqual(jasmine.any(Function));
            expect(result).toEqual(requestData);
        });

    });

    it('should get proper error message', function() {

        $httpBackend.expectGET('/api/employees/wrong-id')
            .respond(500, {
                error: 'error message'
            });

        mockEmployee.get({ id: 'wrong-id' })
            .$promise
            .then(function(result) {
                $httpBackend.flush();
                expect(result.error).toBeDefined();
                expect(result.error).toEqual('error message');
                expect(result.firstName).toBeUndefined();
            });

    });

});

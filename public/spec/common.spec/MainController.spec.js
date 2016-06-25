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

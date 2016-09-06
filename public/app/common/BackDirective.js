(function() {
    'use strict';

    angular
        .module('app')
        .directive('backButton', backButton);

    backButton.$inject = ['$window', '$rootScope'];

    function backButton($window, $rootScope) {

        return {
            restrict: 'E',
            scope: true,
            templateUrl: '/app/common/BackDirective.tpl.html',
            link: goBack
        }

        function goBack(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function(){
                    $rootScope.slider = 'slider-left';
                    $window.history.back();
                });
            });
        }
    }


}());

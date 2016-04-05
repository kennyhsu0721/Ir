(function () {
    'use strict';

    angular
        .module('irapp')
        .controller('lab01c', lab01c);

    lab01c.$inject = ['$scope'];
    
    function lab01c($scope) {
        $scope.title = 'lab01c';

        activate();

        function activate() { }
    }
})();

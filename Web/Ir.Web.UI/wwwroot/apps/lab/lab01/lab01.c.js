(function () {
    'use strict';

    angular
        .module('irapp', ['irspat5'])
        .controller('lab01c', lab01c);

    lab01c.$inject = ['$scope'];
    
    function lab01c($scope) {
        $scope.title = 'lab01c';
        $scope.save = function () { _save();}
        activate();

        function activate() { }

        function _save() {
            alert("aa");
        }
    }
})();

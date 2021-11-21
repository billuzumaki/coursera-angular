(function(){
'usar string'
    angular.module('todoApp', [])
    .controller('formMenu', formMenu)
    formMenu.$inject = ['$scope']

    function formMenu($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
        
        $scope.showMessage = function() {
            var counter = $scope.lunchMenu.split(' ');
            if ($scope.lunchMenu === "") {
                $scope.message = "please enter date firt";
            } else if (counter.length <= 3) {
                $scope.message = "enjoy";
            } else if (counter.length > 3) {
                $scope.message = "too much";
            }
        }
    }
})()

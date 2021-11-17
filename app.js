(function(){
    'use string';

    angular.module('lunchckeck', [])
    .controller('lunchcheckcontroller', lunchcheckcontroller)
       function lunchcheckcontroller($scope) {
           $scope.bt = function (){
              $scope.dish = $scope.lunckmenu.split(' ');
              if ($scope.dish.length <= 3) {
                  $scope.message = "enjoy";
              }
              else if ($scope.dish.length >3) {
                $scope.message = "too much";
              }
           }
       } 
})()
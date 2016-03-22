
var app = angular.module('myApp',[]);
app.controller('MyCtrl',['$scope','$timeout','$rootScope',function($scope,$timeout,$rootScope){
    $scope.scope1 = 'hello';
    $timeout(function(){
        $scope.scope2 = 'bye';
        $scope.scope1 = "Praveen";
    });
    setTimeout(function () {
        $scope.scope2 = 'Welcome';
        $scope.$digest();
    },5000)
}]);

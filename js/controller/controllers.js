angular.module('myApp.controllers',[])
    .controller('mainController',function ($scope,users) {
        $scope.users = users.data.users;
    })
angular.module('ToDoList', ['LocalStorageModule'])
    .controller('ToDoController', function ($scope,localStorageService) {
        if(localStorageService.get('angular-toDoList'))
            $scope.todo = localStorageService.get('angular-toDoList');
        else
            $scope.todo = [];
        $scope.$watchCollection('todo',function(valorAntiguo,valorNuevo){
            localStorageService.set('angular-toDoList',$scope.todo);
            console.log(valorAntiguo,valorNuevo);
        });
        $scope.addActv = function () {
            $scope.todo.push($scope.newActv);
            $scope.newActv = {};
        };
    });
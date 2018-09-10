angular.module('mainModule',[])
    .filter('removeHTML',function(){
        return function (texto) {
           return String(texto).replace(/<[^>]+>/gm,'')
        }
    })
    .controller('filtersController',function ($scope) {
        $scope.mi_html = {};
        $scope.mi_html.title = 'dfgfdgfd';
        $scope.mi_html.costo = 3;
    });

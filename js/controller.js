var app = angular.module('restaurantApp', []);
app.controller('firstController', ['$scope', '$http', function (a, b) {
    a.nombre = 'Kevin Mike';
    a.nuevoComentario = {};
    a.comentarios = [
        {
            comentario: 'Buen tutorial',
            username: 'kevinmike'
        }
    ];
    a.agregarComentario = function () {
        a.comentarios.push(a.nuevoComentario);
        a.nuevoComentario = {};
    }
}]);

app.controller('ajaxController', function ($scope, $http) {
    $scope.posts = [];
    $scope.newPost = {};
    $http.get('https://jsonplaceholder.typicode.com/posts')
        .success(function (data) {
            $scope.posts = data
        })
        .error(function (data) {
        });
    $scope.addPost = function () {
        $http.post('https://jsonplaceholder.typicode.com/posts', {
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
        })
            .success(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                $scope.newPost = {};
            })
            .error(function (error, status, headers, config) {

            })
    };
});


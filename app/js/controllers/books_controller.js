// with $resource
angular.module("app")
.config(function config( $stateProvider ) {
    $stateProvider.state( 'books', {
        url: '/books',
        views: {
            "main": {
                controller: 'BooksController',
                templateUrl: 'books.html'
            }
        },
        data:{ pageTitle: 'Books' }
    });
})
.controller("BooksController", function ($scope, BookResource) {
  // because the stubbed endpoint returns an array of results, .query() is used
  // if the endpoint returned an object, you would use .get()
  $scope.books = BookResource.query();
});

// with $http
// angular.module("app").controller("BooksController", function ($scope, BookService) {
//   $scope.books = BookService.getBooks();
// });

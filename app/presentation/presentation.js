angular.module('presentation', []);

angular.module('presentation').controller('PresentationController', ['$scope', 'md5', 'articles', function ($scope, md5, articles) {
    $scope.md5 = md5;
    $scope.articles = articles;
}]);
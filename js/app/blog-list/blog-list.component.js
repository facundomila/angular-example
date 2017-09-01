'use strict';

angular.module('blogList').
  component('blogList', {
    templateUrl: '/templates/blog-list.html',
    controller: function($scope) {
      var blogItems = [
        {title: "Title one", id: 1 ,description: "Some content example"},
        {title: "Title two", id: 2, description: "Some content example"},
        {title: "Title three", id:3, description: "Some content example"},
        {title: "Title four", id:4, description: "Some content example"},
        {title: "Title five", id:5, description: "Some content example"},
      ]

      $scope.items = blogItems
      $scope.count = $scope.items.length
      $scope.clicks = 0
      $scope.title = 'Clicked ' + $scope.clicks + ' times'
      $scope.someClickTest = function() {
        $scope.clicks += 1
        $scope.title = 'Clicked ' + $scope.clicks + ' times'
      }
    }
  });

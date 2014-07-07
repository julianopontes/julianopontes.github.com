'use strict';

angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.control = function() {
    	$scope.awesomeThings.push('test');
    };
  });

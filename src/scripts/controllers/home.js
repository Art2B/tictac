(function(){
'use strict';

angular.module('tictac').controller('HomeCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope){
    $scope.message = "Home Controller";
  }
]);
}());
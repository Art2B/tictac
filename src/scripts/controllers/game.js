(function(){
'use strict';

angular.module('tictac').controller('GameCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope){
    $scope.message = "Game Controller";
  }
]);
}());
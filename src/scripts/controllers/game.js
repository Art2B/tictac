(function(){
'use strict';

angular.module('tictac').controller('GameCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope){
    $rootScope.message = "Game Controller";
  }
]);
}());
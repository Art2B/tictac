(function(){
'use strict';

angular.module('tictac').controller('HomeCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope){
    $rootScope.message = "Home Controller";
  }
]);
}());
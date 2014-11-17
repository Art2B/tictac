(function(){
'use strict';

angular.module('tictac').controller('CreditsCtrl', ['$rootScope', '$scope', 
  function($rootScope, $scope){
    $scope.message = "Credits Controller";
  }
]);
}());
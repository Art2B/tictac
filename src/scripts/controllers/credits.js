(function(){
'use strict';

angular.module('tictac').controller('CreditsCtrl', ['$rootScope', '$scope', 
  function($rootScope, $scope){
    $rootScope.message = "Credits Controller";
  }
]);
}());
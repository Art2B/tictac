(function(){
'use strict';

angular.module('tictac').controller('HomeCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope){
    $rootScope.isHome = true;
    
    $scope.showArrow = function(){
        $rootScope.isHome = false;
    };
  }
]);
}());
(function(){
'use strict';

angular.module('tictac').controller('OptionsCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope)  {
    $rootScope.message = "Options Controller";
  }
]);
}());
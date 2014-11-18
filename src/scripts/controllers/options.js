(function(){
'use strict';

angular.module('tictac').controller('OptionsCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope)  {
    $scope.images = [
        'clock1.png',
        'clock2.png',
        'clock3.png'
    ];

    $scope.selectImg = function(img){
        console.log(img);
    };
  }
]);
}());
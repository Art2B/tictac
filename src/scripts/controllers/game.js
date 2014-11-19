(function(){
'use strict';

angular.module('tictac').controller('GameCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope){
    var clockName = '';
    if($rootScope.clockName !== undefined) {
        clockName = $rootScope.clockName;
    } else {
        clockName = 'clock1.png';
    }

    $scope.time = {
        hours: 0,
        minutes: 0
    };

    $scope.increaseHours = function(obj){
        if(obj < 24){
            $scope.time.hours = obj + 1;
        }
    };
    $scope.decreaseHours = function(obj){
        if(obj > 0){
            $scope.time.hours = obj - 1;
        }
    };
    $scope.increaseMinutes = function(obj){
        if(obj < 59){
            $scope.time.minutes = obj + 1;
        } else {
            $scope.time.minutes = 0;
        }
    };
    $scope.decreaseMinutes = function(obj){
        if(obj > 0){
            $scope.time.minutes = obj - 1;
        }
    };
    $scope.verify = function(time){
        if(tictac.verify(time)) {
            $scope.result = true;
            ngDialog.open({ template: 'win.html' });
        } else {
            $scope.result = false;
            ngDialog.open({ template: 'loose.html' });
        }
    };
    $scope.replay = function(){
        tictac.init();
    };

    var tictac = new Tictac($scope, {});
    tictac.init();
    $scope.dayPeriod = tictac.time.period;
  }
]);
}());
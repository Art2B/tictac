(function(){
'use strict';

angular.module('tictac').controller('GameCtrl', ['$rootScope', '$scope', 'ngDialog',
  function($rootScope, $scope, ngDialog){
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
        var btnString = '<div class="btn-little btn-small btn-menu" ng-click="closeThisDialog()"><a href="#/"></a></div><div class="btn-little btn-small btn-replay" ng-click="closeThisDialog()"></div>';
        if(tictac.verify(time)) {
            $scope.result = true;
            ngDialog.open({
                template: '<img src="images/success.png" width="400">'+btnString,
                plain: true
            });
        } else {
            $scope.result = false;
            var goodTime = tictac.time.hours + "h"+tictac.time.minutes;
            ngDialog.open({
                template: '<img src="images/fail.png" width="400"><p>L\'heure exacte était: '+goodTime+'</p>'+btnString,
                plain: true
            });
        }
    };
    $scope.newGame = function(){
        $scope.time.hours = 0;
        $scope.time.minutes = 0;
        tictac.newGame();
        $scope.dayPeriod = tictac.time.period;
    };

    $rootScope.$on('ngDialog.closing', function (e, $dialog) {
        $scope.newGame();
    });

    var tictac = new Tictac({
        image: clockName
    });
    $scope.newGame();
  }
]);
}());
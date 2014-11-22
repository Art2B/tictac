var Tictac = Tictac || {};
Tictac = function(option){
    var defaultOption = {
    };
    this.option = option || defaultOption;
    return this;
};
Tictac.prototype = {
    time: {},
    init: function(){
        var _self = this;

        _self.time.hours = Math.floor(Math.random() * (23 - 0 + 1) + 0);
        _self.time.minutes = Math.floor(Math.random() * (12 - 0 + 1) + 0) * 5;
        if((_self.time.hours - 12) > 0){
            _self.time.period = "Après-midi";
        } else {
            _self.time.period = "Matin";
        }
        console.log(_self.time);
    },
    verify: function(time){
        var _self = this;
        var isGood = true;
        if(time.hours !== _self.time.hours){
            isGood = false;
        }
        if(time.minutes !== _self.time.minutes){
            isGood = false;
        }
        return isGood;
    },
    newGame: function(){
        var _self = this;
        _self.init();
    }
};
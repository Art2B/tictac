var Tictac = Tictac || {};
Tictac = function(option){
    var defaultOption = {
        image: 'clock1.png'
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
        if(_self.time.minutes == 60) {
            _self.time.minutes = 0;
        }

        if((_self.time.hours - 12) > 0){
            _self.time.period = "Après-midi";
        } else {
            _self.time.period = "Matin";
        }

        var clock = new Image();
        var hours = new Image();
        var minutes = new Image();

        var stage = new Kinetic.Stage({
          container: 'clock-canvas',
          width: 440,
          height: 456
        });
        var layer = new Kinetic.Layer();

        clock.src = 'images/'+_self.option.image;
        hours.src = 'images/secondHand.png';
        minutes.src = 'images/firstHand.png';
        
        clock.onload = function(){
            var background = new Kinetic.Image({
                x: 0,
                y: 0,
                image: clock,
                draggable: false
            });
            layer.add(background);
            layer.draw(); 
        };
        hours.onload = function(){
            var hoursImage = new Kinetic.Image({
                x: 218,
                y: 220,
                image: hours,
                draggable: false
            });
            hoursImage.setScale({y:-1});
            var angle = ((360/12)*_self.time.hours) + ( (360/12) * (_self.time.minutes/60));
            hoursImage.rotate(angle);
            layer.add(hoursImage);
            layer.draw();   
        };
        minutes.onload = function(){
            var minutesImage = new Kinetic.Image({
                x: 218,
                y: 220,
                image: minutes,
                draggable: false
            });
            minutesImage.setScale({y:-1});
            var angle = (360/60)*_self.time.minutes;
            minutesImage.rotate(angle);
            layer.add(minutesImage);
            layer.draw();   
        };


        stage.add(layer);
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
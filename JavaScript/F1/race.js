function Race () {
    this.km = 0;
    this.racers = [];

    this.generateReacer = function () {
        for (var index = 1; index <= 22; index++) {
            console.log ("ova e sofer broj " + index);
            var racer = new RaceCar (driver);
            this.racers.push(racer);
        }
    }



    this.lapCount = function () {
        var lap = new Laps ();
        for (var index = 1; index <=80; index++) {
            console.log("се возиме во " + index + " круг на трката");
            
            this.km = lap.length * index;

            // for (var i = 0; i < this.racers.length; i++) {
            //     this.racers[i].time = this.km / this.racers[i].speed;
            //     console.log(this.racers[i].time);
            // }



        }
    }





    this.goToPitstop = function () {
        var pitstop = new PitStop ();
        for (var i = 0; i < this.racers.length; i++) {
            if (this.racers[i].fuel < 20) {



            }

        }

    }
    
    this.generateReacer ();
    this.lapCount ();
    this.goToPitstop ();



}
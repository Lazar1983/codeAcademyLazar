function FootballClub (name, players) {
    this.stadium = new Stadium ("Stanford Bridge");
    this.clubProfit = 0;
    this.goalsScored = 0;
    this.players =[];
    this.fanShop = new FanShop(); 
    this.totalplayers = players;
    this.name = name;
    this.clubStats = 0;
    this.jerseysMoney = 0;


    this.draftPlayers = function () {
        for (index = 1; index <= 22; index++) {
            var player = new Player (position[getRandomNumber(0, 3)] + "-" + index);
            this.players.push(player);
        }
    }

    this.superStar = function (number) {
        var player = new Player ("Super Star", 10);
        this.players.compare(21, 21);
        this.players.push(player);
    }


    this.stats = function(){
        for(var i = 0; i < this.players.length; i++){
            this.clubStats += this.players[i].stats
        }
        this.clubStats /= this.players.length;
        console.log("The score of club is " + this.clubStats);
    }


    this.sortPlayers = function(){
        this.players.sort (function (a, b) {
            return b.stats - a.stats
        });
    }


    this.ticketMoney();
    console.log("Today is match ", day + " for " + this.name);
    console.log("Today we have " + this.stadium.seatsFilled + " fans that bought ticket and made us profit of " + this.ticketProfit + "$")
        if(calculatePercent(30) === true){
            console.log("Today " + this.name + " scored a goal");
            this.goalsScored ++;
            sold = this.fanShop.sells(this.stadium.seatsFilled, 25);
            this.jerseysMoney = sold * 5;
            console.log("Today we have sold " + sold + " jerseys and made " + this.jerseysMoney + "$");
        }else{
            console.log("Today " + this.name + " didn't score a goal");
            sold = this.fanShop.sells(this.stadium.seatsFilled, 10);
            this.jerseysMoney = sold * 5;
            console.log("Today we have sold " + sold + " jerseys and made " + this.jerseysMoney + "$");
        }
    this.hooligansDamage();
    this.clubMoney += this.jerseysMoney + this.ticketProfit - this.hooligansmoney;  
    
    
    }



    this.ticketMoney = function(){
        this.ticketProfit = this.stadium.seatsFilled * 2;
    }
    this.ticketProfit = 0;
    this.hooligansmoney = 0;
    this.hooligans = 0;
    this.hooligansDamage = function(){
        this.hooligans = percentage(this.stadium.seatsFilled, 5);
        this.hooligansmoney = this.hooligans * 25;
        console.log("We have " + this.hooligans + " hooligans that made " + this.hooligansmoney + "$ damage")
    }

    this.gameDay = function(day){
		this.stadium.fansCametoWatch();
		var sold = 0;
			
    this.ticketMoney();
        console.log("Today is match ", day + " for " + this.name);
        console.log("Today we have " + this.stadium.seatsFilled + " fans that bought ticket and made us profit of " + this.ticketProfit + "$")
			if(calculatePercent(30) === true){
				console.log("Today " + this.name + " scored a goal");
				this.goalsScored ++;
				sold = this.fanShop.sells(this.stadium.seatsFilled, 25);
				this.jerseysMoney = sold * 5;
				console.log("Today we have sold " + sold + " jerseys and made " + this.jerseysMoney + "$");
			}else{
				console.log("Today " + this.name + " didn't score a goal");
				sold = this.fanShop.sells(this.stadium.seatsFilled, 10);
				this.jerseysMoney = sold * 5;
				console.log("Today we have sold " + sold + " jerseys and made " + this.jerseysMoney + "$");
			}
        this.hooligansDamage();
        this.clubMoney += this.jerseysMoney + this.ticketProfit - this.hooligansmoney;  
        
        
    }


    // this.scoreGoals = function () {

    //         if (calculatePercent(30)) {
    //             goal.registerToGame(this.goals[getRandomNumber(0, 4)]);
    //         }
    //         this.goals.push(goal);
    //     }
    
    // }

    // this.scoreGoals();

    
            // if (index % 8 === 0) {
        //     footballClub.superStar();
        //     var star = new Player (index);
        //     footballClub.players.push(star);
        //     console.log("This is new player");
            
        // }

    // this.removeWeakPlayer();
    this.draftPlayers();
    // this.generateDays();
  
    this.superStar();


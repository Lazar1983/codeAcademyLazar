function main() {
    var footballClub = new FootballClub("Chelsea");
    
   
    for (index = 1; index <= 30; index++) {
        footballClub.playGame(index);
    }
        if (index % 8 === 0) {
            footballClub.draftPlayers();
            footballClub.superStar();
        }
   
    console.log(footballClub);
    }
   

main();
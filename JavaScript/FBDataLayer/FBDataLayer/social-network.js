function SocialNetwork (name) {
    this.name = name;
    this.users = [];
    this.events = [];
    

    this.generateUsers = function () {
        for (var index = 1; index <= 50; index++){
            var user = new User (getRandomNumber(0, 4) + "-" + index);
            this.users.push(user);
        
        }
    }
    
    this.generateEvents = function () {
        for (var index = 1; index <= 5; index++) {
            var event = new Event (index);
            this.events.push(event);
        }
    }

    this.generateUsers();
    this.generateEvents();
   
}
function Human(index) {
    this.name = "Person-" + index;
    this.vacationDays = getRandomNumber(3, 7);
    this.money = 2000;

    this.pay = function (money) {
        this.money -= money;
    }

    this.calculateDays = function() {
        this.vacationDays--;
    }
}



function Stadium (name) {
    this.name = name;
    this.capacity = 42000;

    this.customers = function () {
        this.capacity = calculatePercent(this.capacity, getRandomNumber(40,98));
    }

}
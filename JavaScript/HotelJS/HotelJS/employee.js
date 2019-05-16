function Employee () {
    this.name = "Employee" + index;
    this.workingDays = 5;
    this.pay = 300;

    // this.pay = function (pay) {
    //     this.pay += pay; 
    // }
    
    this.workingDays = function () {
        this.workingDays--;
    }
    
}
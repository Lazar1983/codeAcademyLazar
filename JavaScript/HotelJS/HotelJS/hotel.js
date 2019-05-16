function Hotel(name) {
    this.name = name;
    this.rooms = [];
    this.employees = [];

    this.work = function() {
        for (var index = 0; index < this.rooms.length; index++) {
            var room =  this.rooms[index];
            room.spendDay();
        }
    }

    this.admit = function (customer) {
        for (var index = 0; index < this.rooms.length; index++) {
            var room =  this.rooms[index];

            if (!room.isDirty && !room.isTaken) {
                room.fillVacation(customer);
                return;
            }
        }
    }

    this.generateEmployees = function(employee) {
        for (var index = 1; index < this.rooms.length; index++) {
            var room = new Employee(index);
               
            if (room.isDirty && room.isTaken) {
                room.getCleaned(employee);
                return bill;
            }
        }

    }
    
    this.generateRooms = function() {
        for (var index = 1; index <= 100; index++) {
            var room = new Room(index);
            this.rooms.push(room);
        }
    }

    this.generateRooms();
    this.generateEmployees(10);
}


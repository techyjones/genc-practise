function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
  }
  
  Event.prototype.checkAvailability = function () {
    return this.seats > 0;
  };
  
  const e1 = new Event("Yoga Day", "2025-06-21", 20);
  console.log(Object.entries(e1));
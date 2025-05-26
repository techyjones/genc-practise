const events = [
    { name: "Music Fest", date: "2025-07-10", seats: 10 },
    { name: "Tech Talk", date: "2024-05-01", seats: 0 }
  ];
  
  const today = new Date();
  
  events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate > today && event.seats > 0) {
      console.log(`Upcoming Event: ${event.name}`);
    } else {
      console.log(`Skipping ${event.name}`);
    }
  });
  
  try {
    const register = (event) => {
      if (event.seats <= 0) throw "No seats available";
      event.seats--;
    };
    register(events[0]);
  } catch (err) {
    console.error("Registration error:", err);
  }
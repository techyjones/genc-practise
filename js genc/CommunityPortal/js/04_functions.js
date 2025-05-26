function addEvent(events, newEvent) {
    events.push(newEvent);
  }
  
  function registerUser(event) {
    if (event.seats > 0) event.seats--;
  }
  
  function filterEventsByCategory(events, category) {
    return events.filter(e => e.category === category);
  }
  
  function createCategoryCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  
  const musicCounter = createCategoryCounter();
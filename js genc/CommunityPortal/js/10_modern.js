const cloneList = [...communityEvents];
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

const { name: eventTitle, category } = communityEvents[0];

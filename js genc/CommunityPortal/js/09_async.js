fetch("data/events.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

async function loadEvents() {
  const spinner = document.querySelector("#loading");
  spinner.style.display = "block";
  try {
    const res = await fetch("data/events.json");
    const data = await res.json();
    console.log(data);
  } finally {
    spinner.style.display = "none";
  }
}

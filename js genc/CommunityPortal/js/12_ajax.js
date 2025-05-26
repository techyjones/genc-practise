const userData = { name: "John", email: "john@example.com" };

fetch("https://mockapi.io/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userData)
})
  .then(res => res.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch(err => console.error("Error:", err));

setTimeout(() => {
  console.log("Simulated response delay");
}, 2000);
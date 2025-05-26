console.log("Submitting form");
try {
  const payload = { name: "Test" };
  console.log("Payload:", payload);
  fetch("/submit", { method: "POST", body: JSON.stringify(payload) });
} catch (err) {
  console.error("Caught error:", err);
}
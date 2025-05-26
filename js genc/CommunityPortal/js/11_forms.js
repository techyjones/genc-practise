const form = document.querySelector("#registrationForm");
form.onsubmit = function (e) {
  e.preventDefault();
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  if (!name || !email) {
    document.querySelector("#error").innerText = "All fields required";
    return;
  }
  console.log("Form submitted", { name, email });
};


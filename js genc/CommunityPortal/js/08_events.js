document.querySelector("#registerBtn").onclick = function () {
    alert("Registered!");
  };
  
  document.querySelector("#categorySelect").onchange = function (e) {
    console.log("Filtering by:", e.target.value);
  };
  
  document.querySelector("#searchInput").onkeydown = function (e) {
    if (e.key === "Enter") console.log("Search triggered");
  };
  
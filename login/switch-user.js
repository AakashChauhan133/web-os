let showUser = 1;

function toggleUser() {
  if (showUser === 1) {
    fetch("get-users.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Users:", data);
        const userList = document.getElementById("userList");
        userList.style.display = "inline";

        // Convert array of users to HTML list
        const html = data.map(user => `<li>${user}</li>`).join("");
        userList.innerHTML = `<ul>${html}</ul>`;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  } else {
    document.getElementById("userList").style.display = "none";
  }

  showUser = showUser * -1;
}




let showPower = 1;

function togglePower() {
  if (showPower === 1) {
    document.getElementById("powerList").style.display = "block";
  } else {
    document.getElementById("powerList").style.display = "none";
  }

  showPower = showPower * -1;
}

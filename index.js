var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://restapi.tu.ac.th/api/v2/profile/std/info/?id=XXXXXXXXXX");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Application-Key", "use your won access token");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        const objects = JSON.parse(this.responseText);
        console.log(objects);
        if (objects["status"]) {
          const data = objects["data"]
          //document.getElementById("fname").innerHTML = data["displayname_th"];
          document.getElementById("username").innerHTML = data["userName"];
          document.getElementById("nameTH").innerHTML = data["displayname_th"];
          document.getElementById("nameEN").innerHTML = data["displayname_en"];
          document.getElementById("prefixName").innerHTML = data["prefixname"];
        }
      }
    };
  }
loadUser();

function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login.html'
}

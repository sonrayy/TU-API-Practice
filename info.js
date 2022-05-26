var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://restapi.tu.ac.th/api/v2/profile/std/info/?id=6209610234");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Application-Key", "TU0261e56e18732dfbc1e37a3d1de235bc7274857639ea4534c3c6b55392bbc939a3f90b04f5b03905d31e344d32dd2b6b");
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
          document.getElementById("email").innerHTML = data["email"];
          document.getElementById("faculty").innerHTML = data["faculty"];
          document.getElementById("major").innerHTML = data["department"];
          document.getElementById("status").innerHTML = data["statusname"];
        }
      }
    };
  }
loadUser();

function logout() {
    localStorage.removeItem("jwt");
    window.location.href = './login.html'
}
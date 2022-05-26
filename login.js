var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // console.log(username);
    // console.log(password);
    
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://restapi.tu.ac.th/api/v1/auth/Ad/verify2");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Application-Key", "use your own acces token");
    xhttp.send(JSON.stringify({
      "UserName": username,
      "PassWord": password
    }));
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        const objects = JSON.parse(this.responseText);
        console.log(objects);
        if (objects['status']) {
          localStorage.setItem("jwt", objects['accessToken']);
          Swal.fire({
            text: objects['message'],
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = './index.html';
            }
          });
        } else {
          Swal.fire({
            text: objects['message'],
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    };
    return false;
}

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
    xhttp.setRequestHeader("Application-Key", "TU0261e56e18732dfbc1e37a3d1de235bc7274857639ea4534c3c6b55392bbc939a3f90b04f5b03905d31e344d32dd2b6b");
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
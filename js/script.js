//function to store user name and password
function store () {
     var inputUsername= document.getElementById("username");
     var inputPassword= document.getElementById("password");
     localStorage.setItem("username", inputUsername.value);
     localStorage.setItem("password", inputPassword.value);
    };

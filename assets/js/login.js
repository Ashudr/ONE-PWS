const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value.trim();

    const password =
    document.getElementById("password").value.trim();

    if(username==="Mr_Responsible@1006" &&
       password==="Mr_Responsible@1006"){

        alert("Login Successful");

        // Next sprint:
        // window.location.href="../dashboard/dashboard.html";

    }

    else{

        alert("Invalid Login ID or Password");

    }

});
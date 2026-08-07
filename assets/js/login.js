document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        // Correct credentials
        if (username === "ONEPWS" && password === "ONEPWS") {

            // Create login session
            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("username", username);

            // Dashboard
            window.location.href =
                "../dashboard/dashboard.html";

        } else {

            // Wrong credentials
            alert("Invalid Username or Password.");

            // Keep user on login page
            document.getElementById("password").value = "";

            document.getElementById("password").focus();

        }

    });

});
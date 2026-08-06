document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "ONEPWS" && password === "ONEPWS") {

            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("user", username);

            window.location.href = "pages/dashboard/dashboard.html";

        } else {

            alert("Invalid Username or Password");

        }

    });

});
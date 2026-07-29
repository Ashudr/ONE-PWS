/* ==========================================================
   ONEPWS Enterprise Project Management System
   Module : Login
   Version : 1.0
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Simple validation
        if (username === "") {
            alert("Please enter your username.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        // Temporary login
        // Later this will be replaced with PHP + MySQL authentication

        window.location.href = "pages/dashboard/dashboard.html";

    });

});
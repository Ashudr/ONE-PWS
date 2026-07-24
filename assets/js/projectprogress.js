/* ==========================================================
   ONEPWS
   Project Progress JavaScript
========================================================== */

"use strict";

/* ==========================================================
   Initialize Page
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Project Progress Loaded");

    initializeButtons();

    animateProgress();

});

/* ==========================================================
   Buttons
========================================================== */

function initializeButtons() {

    // Back Button

    const backButton = document.getElementById("backButton");

    if (backButton) {

        backButton.addEventListener("click", function () {

            window.location.href =
                "../projectboard/projectboard.html";

        });

    }

    // Task Board

    const taskButton = document.getElementById("taskBoardBtn");

    if (taskButton) {

        taskButton.addEventListener("click", function () {

            window.location.href =
                "../taskboard/taskboard.html";

        });

    }

    // Notification

    const notificationButton =
        document.getElementById("notificationBtn");

    if (notificationButton) {

        notificationButton.addEventListener("click", function () {

            alert("Notification Center will be added soon.");

        });

    }

    // Profile

    const profileButton =
        document.getElementById("profileBtn");

    if (profileButton) {

        profileButton.addEventListener("click", function () {

            alert("User Profile coming soon.");

        });

    }

}

/* ==========================================================
   Progress Animation
========================================================== */

function animateProgress() {

    const circle =
        document.querySelector(".progress-circle");

    if (!circle) return;

    let progress = 0;

    const target = 72;

    const timer = setInterval(function () {

        progress++;

        circle.innerHTML = progress + "%";

        if (progress >= target) {

            clearInterval(timer);

        }

    }, 20);

}
/* ==========================================================
   ONEPWS
   Project Board JavaScript
========================================================== */

"use strict";

/* ==========================================================
   Sample Project Data
   (Temporary - Later this will come from database)
========================================================== */

const projects = [

    {

        id: "SAP240125",

        name: "Corporate HQ",

        customer: "ABC Pvt Ltd",

        manager: "Ashu",

        progress: 72,

        status: "On Track"

    }

];


/* ==========================================================
   Page Loaded
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("ONEPWS Project Board Loaded");

    initializeButtons();

    initializeSearch();

});


/* ==========================================================
   Buttons
========================================================== */

function initializeButtons() {

   

// ===========================
// New Project
// ===========================

const newProjectButton =
    document.getElementById("newProject");

if (newProjectButton) {

    newProjectButton.onclick = function () {

        window.location.href =
            "../projectwizard/projectwizard.html";

    };

}


    // Notification

    const notificationButton = document.getElementById("notificationBtn");

    if (notificationButton) {

        notificationButton.addEventListener("click", function () {

            alert("Notifications page coming soon.");

        });

    }


    // Profile

    const profileButton = document.getElementById("profileBtn");

    if (profileButton) {

        profileButton.addEventListener("click", function () {

            alert("Profile menu coming soon.");

        });

    }


    // Open Project

    const openButtons = document.querySelectorAll(".openProject");

    openButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.location.href =
                "../projectprogress/projectprogress.html";

        });

    });

}


/* ==========================================================
   Search
========================================================== */

function initializeSearch() {

    const searchBox = document.getElementById("searchProject");

    if (!searchBox) return;

    searchBox.addEventListener("keyup", function () {

        const keyword =
            this.value.toLowerCase();

        const cards =
            document.querySelectorAll(".project-card");

        cards.forEach(function (card) {

            if (
                card.innerText.toLowerCase().includes(keyword)
            ) {

                card.style.display = "";

            }

            else {

                card.style.display = "none";

            }

        });

    });

}


/* ==========================================================
   Future Functions
========================================================== */

// loadProjectsFromDatabase()

// createProject()

// editProject()

// deleteProject()

// createModule()

// calculateProgress()

// showNotification()

// rolePermission()

// exportProject()

// importProject()
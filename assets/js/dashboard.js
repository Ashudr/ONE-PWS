"use strict";

/*==================================================
        ONEPWS DASHBOARD
==================================================*/

document.addEventListener("DOMContentLoaded", initializeDashboardButtons);

/*==================================================
        BUTTONS
==================================================*/

function initializeDashboardButtons() {

    // Create New Project

    const createProject =
        document.getElementById("createProjectBtn");

    if (createProject) {

        createProject.addEventListener("click", function () {

            window.location.href =
                "../projectwizard/projectwizard.html";

        });

    }

// Sidebar Reports

const reportsMenu =
    document.getElementById("reportsMenu");

if (reportsMenu) {

    reportsMenu.addEventListener("click", function () {

        alert("Reports Module - Coming Soon");

    });

}

    // Banner Create Project

const bannerProject =
    document.getElementById("createProjectBannerBtn");

if (bannerProject) {

    bannerProject.addEventListener("click", function () {

        window.location.href =
            "../projectwizard/projectwizard.html";

    });

}

    // Create Task

    const createTask =
        document.getElementById("createTaskBtn");

    if (createTask) {

        createTask.addEventListener("click", function () {

            window.location.href =
                "../taskboard/taskboard.html";

        });

    }

    // Add Customer

    const addCustomer =
        document.getElementById("addCustomerBtn");

    if (addCustomer) {

        addCustomer.addEventListener("click", function () {

            alert("Customer Module - Coming Soon");

        });

    }

    // View Reports

    const reports =
        document.getElementById("viewReportsBtn");

    if (reports) {

        reports.addEventListener("click", function () {

            alert("Reports Module - Coming Soon");

        });

    }

}
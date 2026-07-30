"use strict";

/*==================================================
        ONEPWS PROJECT DASHBOARD
==================================================*/

document.addEventListener("DOMContentLoaded", initializeProjectDashboard);

/*==================================================
        INITIALIZE
==================================================*/

function initializeProjectDashboard() {

    loadProjectInformation();

    initializeButtons();

}

/*==================================================
        LOAD PROJECT
==================================================*/

function loadProjectInformation() {

    const projects = getProjects();

    if (projects.length === 0)
        return;

    const project = projects[projects.length - 1];

    document.getElementById("projectName").innerText =
        project.projectName;

    document.getElementById("projectNumber").innerText =
        project.projectNumber;

    document.getElementById("customerName").innerText =
        project.customer;

    document.getElementById("projectManager").innerText =
        project.projectManager;

    document.getElementById("projectPriority").innerText =
        project.priority;

    document.getElementById("startDate").innerText =
        project.startDate;

    document.getElementById("endDate").innerText =
        project.endDate;

}

/*==================================================
        BUTTONS
==================================================*/

function initializeButtons() {

    // Dashboard Button

    const dashboardButton =
        document.getElementById("goDashboard");

    if (dashboardButton) {

        dashboardButton.addEventListener("click", function () {

            window.location.href =
                "../dashboard/dashboard.html";

        });

    }

    // Project Board Button

    const boardButton =
        document.getElementById("backToBoard");

    if (boardButton) {

        boardButton.addEventListener("click", function () {

            window.location.href =
                "../projectboard/projectprogress.html";

        });

    }

}
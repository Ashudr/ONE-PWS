"use strict";

/*==================================================
        ONEPWS DASHBOARD LOADER
==================================================*/

document.addEventListener("DOMContentLoaded", initializeDashboard);

/*==================================================
        INITIALIZE
==================================================*/

function initializeDashboard() {

    loadKPIs();

    loadRecentProjects();

}

/*==================================================
        LOAD KPI
==================================================*/

function loadKPIs() {

    const projects = getProjects();

    const totalProjects = projects.length;

    document.getElementById("kpiTotalProjects").innerText =
        totalProjects;

}

/*==================================================
        LOAD RECENT PROJECTS
==================================================*/

function loadRecentProjects() {

    const projects = getProjects();

    const tbody =
        document.getElementById("recentProjectsBody");

    if (!tbody)
        return;

    tbody.innerHTML = "";

    projects.forEach(function(project){

        let row = document.createElement("tr");

        row.innerHTML =

        "<td>"+project.projectNumber+"</td>" +

        "<td>"+project.projectName+"</td>" +

        "<td>"+project.customer+"</td>" +

        "<td>"+project.template+"</td>" +

        "<td>Running</td>";

        tbody.appendChild(row);

    });

}
"use strict";

/* ==========================================
   NEW PROJECT OBJECT
========================================== */

let newProject = {

    function initializeProjectDetails() {

    document.getElementById("projectNumber").value =
        newProject.projectNumber;

    document.getElementById("projectName").addEventListener("input", function () {

        newProject.projectName = this.value;

        console.log(newProject);

    });

    document.getElementById("customer").addEventListener("change", function () {

        newProject.customer = this.value;

    });

    document.getElementById("businessUnit").addEventListener("change", function () {

        newProject.businessUnit = this.value;

    });

    document.getElementById("projectManager").addEventListener("change", function () {

        newProject.projectManager = this.value;

    });

    document.getElementById("designHead").addEventListener("change", function () {

        newProject.designHead = this.value;

    });

    document.getElementById("priority").addEventListener("change", function () {

        newProject.priority = this.value;

    });

    document.getElementById("startDate").addEventListener("change", function () {

        newProject.startDate = this.value;

    });

    document.getElementById("endDate").addEventListener("change", function () {

        newProject.endDate = this.value;

    });

    document.getElementById("description").addEventListener("input", function () {

        newProject.description = this.value;

    });

}

    template: "",

    projectNumber: "SAP260001",

    projectName: "",

    customer: "",

    businessUnit: "",

    projectManager: "",

    designHead: "",

    priority: "Medium",

    startDate: "",

    endDate: "",

    description: "",

    modules: []

};
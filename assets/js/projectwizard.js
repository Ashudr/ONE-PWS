"use strict";

/* ==========================================================
   ONEPWS - Project Wizard
   Version : 1.0
========================================================== */

/* ==========================================================
   PROJECT OBJECT
========================================================== */

let newProject = {

    template: "",

    projectNumber: generateProjectNumber(),

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

/* ==========================================================
   VARIABLES
========================================================== */

let currentStep = 1;

const totalSteps = 4;

/* ==========================================================
   PAGE LOAD
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeWizard();

    initializeTemplates();

    initializeProjectDetails();

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeWizard() {

    showStep(1);

    document.getElementById("projectNumber").value =
        newProject.projectNumber;

    document.getElementById("prevBtn").addEventListener("click", previousStep);

    document.getElementById("nextBtn").addEventListener("click", nextStep);

    document.getElementById("cancelBtn").addEventListener("click", cancelWizard);

}

/* ==========================================================
   TEMPLATE BUTTONS
========================================================== */

function initializeTemplates() {

    const templates = document.querySelectorAll(".template-btn");

    templates.forEach(function (button) {

        button.addEventListener("click", function () {

            templates.forEach(function (b) {

                b.classList.remove("selected");

            });

            this.classList.add("selected");

            newProject.template =
                this.dataset.template;

            console.log(newProject);

            nextStep();

        });

    });

}

/* ==========================================================
   PROJECT DETAILS
========================================================== */

function initializeProjectDetails() {

    document.getElementById("projectName").addEventListener("input", function () {

        newProject.projectName = this.value;

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

/* ==========================================================
   NEXT
========================================================== */

function nextStep() {

    if (currentStep == 2) {

        loadModules();

    }

    if (currentStep == 3) {

        loadReview();

    }

    if (currentStep < totalSteps) {

        currentStep++;

        showStep(currentStep);

    }

}

/* ==========================================================
   PREVIOUS
========================================================== */

function previousStep() {

    if (currentStep > 1) {

        currentStep--;

        showStep(currentStep);

    }

}

/* ==========================================================
   SHOW STEP
========================================================== */

function showStep(step) {

    const pages =
        document.querySelectorAll(".step-page");

    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });

    document.getElementById("step" + step)
        .classList.add("active-page");

    updateProgress(step);

}

/* ==========================================================
   UPDATE PROGRESS
========================================================== */

function updateProgress(step) {

    const wizardSteps =
        document.querySelectorAll(".wizard-step");

    wizardSteps.forEach(function (item, index) {

        item.classList.remove("active");

        if (index < step) {

            item.classList.add("active");

        }

    });

}

/* ==========================================================
   PROJECT NUMBER
========================================================== */

function generateProjectNumber() {

    const year =
        new Date().getFullYear();

    const random =
        Math.floor(1000 + Math.random() * 9000);

    return "SAP-" + year + "-" + random;

}

/* ==========================================================
   CANCEL
========================================================== */

function cancelWizard() {

    if (confirm("Cancel Project Creation ?")) {

        window.location.href =
            "../projectboard/projectboard.html";

    }

}

/* ==========================================================
LOAD MODULES
========================================================== */

function loadModules() {

    const container = document.getElementById("moduleContainer");

    if (!container) return;

    container.innerHTML = "";

    let modules = [];

    switch(newProject.template){

        case "Office":

            modules = [

                "Ceiling",

                "Flooring",

                "Partition",

                "Furniture",

                "Doors",

                "Windows",

                "Electrical",

                "HVAC"

            ];

            break;

        case "Retail":

            modules = [

                "Display",

                "Signage",

                "Lighting",

                "Furniture",

                "Flooring"

            ];

            break;

        case "Hospital":

            modules = [

                "Medical Gas",

                "HVAC",

                "Clean Room",

                "Ceiling",

                "Flooring"

            ];

            break;

        case "Hotel":

            modules = [

                "Lobby",

                "Guest Rooms",

                "Restaurant",

                "Furniture",

                "Lighting"

            ];

            break;

        case "Industrial":

            modules = [

                "Structure",

                "Utility",

                "Electrical",

                "Flooring"

            ];

            break;

        default:

            modules = [];

    }

    newProject.modules = modules;

    modules.forEach(function(module){

        container.innerHTML +=

        `<label class="module-card">

            <input type="checkbox" checked>

            <span>${module}</span>

        </label>`;

    });

}

/* ==========================================================
LOAD REVIEW
========================================================== */

function loadReview(){

    document.getElementById("reviewTemplate").innerText =
        newProject.template;

    document.getElementById("reviewProjectNumber").innerText =
        newProject.projectNumber;

    document.getElementById("reviewProjectName").innerText =
        newProject.projectName;

    document.getElementById("reviewCustomer").innerText =
        newProject.customer;

    document.getElementById("reviewBusinessUnit").innerText =
        newProject.businessUnit;

    document.getElementById("reviewProjectManager").innerText =
        newProject.projectManager;

    document.getElementById("reviewDesignHead").innerText =
        newProject.designHead;

    document.getElementById("reviewPriority").innerText =
        newProject.priority;

    document.getElementById("reviewStartDate").innerText =
        newProject.startDate;

    document.getElementById("reviewEndDate").innerText =
        newProject.endDate;

    document.getElementById("reviewDescription").innerText =
        newProject.description;

    document.getElementById("reviewModules").innerText =
        newProject.modules.join(", ");

}
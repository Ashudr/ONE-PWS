"use strict";

/*=========================================
        ONEPWS DASHBOARD
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    initializeDashboardButtons();

});

/*=========================================
        BUTTONS
=========================================*/

function initializeDashboardButtons() {

    const button =
        document.getElementById("btnCreateProject");

    if (button) {

        button.addEventListener("click", function () {

            window.location.href =
                "../projectwizard/projectwizard.html";

        });

    }

}
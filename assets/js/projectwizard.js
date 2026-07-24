/* ==========================================================
   ONEPWS Project Wizard
========================================================== */

"use strict";

let currentStep = 0;

const pages = document.querySelectorAll(".step-page");
const steps = document.querySelectorAll(".wizard-step");

const nextButton = document.getElementById("nextBtn");
const previousButton = document.getElementById("prevBtn");

/* ==========================================================
   Initial Load
========================================================== */

showStep(currentStep);

/* ==========================================================
   Next Button
========================================================== */

nextButton.addEventListener("click", function () {

    if (currentStep < pages.length - 1) {

        currentStep++;

        showStep(currentStep);

    }

});

/* ==========================================================
   Previous Button
========================================================== */

previousButton.addEventListener("click", function () {

    if (currentStep > 0) {

        currentStep--;

        showStep(currentStep);

    }

});

/* ==========================================================
   Show Step
========================================================== */

function showStep(step) {

    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });

    steps.forEach(function (item) {

        item.classList.remove("active");

    });

    pages[step].classList.add("active-page");

    steps[step].classList.add("active");

    previousButton.disabled = (step === 0);

    if (step === pages.length - 1) {

        nextButton.innerHTML = "Create Project";

    }

    else {

        nextButton.innerHTML = "Next →";

    }

}
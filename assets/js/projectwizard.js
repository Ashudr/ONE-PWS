/* ==========================================================
   ONEPWS Project Wizard
========================================================== */

"use strict";

let currentStep = 0;
let selectedTemplate = "";

const pages = document.querySelectorAll(".step-page");
const steps = document.querySelectorAll(".wizard-step");

const nextButton = document.getElementById("nextBtn");
const previousButton = document.getElementById("prevBtn");

/* ==========================================================
   Initial Load
========================================================== */
/* ==========================================================
   Template Selection
========================================================== */

const templateButtons = document.querySelectorAll(".template-btn");

templateButtons.forEach(function(button){

    button.addEventListener("click", function(){

        templateButtons.forEach(function(btn){
            btn.classList.remove("selected");
        });

        this.classList.add("selected");

        selectedTemplate = this.innerText;

    });

});
showStep(currentStep);

/* ==========================================================
   Next Button
========================================================== */

nextButton.addEventListener("click", function () {

    // Step 1 Validation

    if(currentStep === 0 && selectedTemplate === ""){

        alert("Please select a Project Template.");

        return;

    }

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
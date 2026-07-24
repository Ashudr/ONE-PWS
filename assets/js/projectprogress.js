/* ==========================================================
   ONEPWS TASK BOARD
========================================================== */

"use strict";

/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("ONEPWS Task Board Loaded");

    initializeButtons();

    initializeSearch();

    initializeCards();

});

/* ==========================================================
   BUTTONS
========================================================== */

function initializeButtons() {

    // Back Button

    const backBtn = document.getElementById("backBtn");

    if(backBtn){

        backBtn.addEventListener("click",function(){

            window.location.href="../projectprogress/projectprogress.html";

        });

    }

    // New Task

    const newTask=document.getElementById("newTaskBtn");

    if(newTask){

        newTask.addEventListener("click",function(){

            alert("New Task popup will be developed in Sprint 5.");

        });

    }

    // Child Task

    const childTask=document.getElementById("childTaskBtn");

    if(childTask){

        childTask.addEventListener("click",function(){

            alert("Child Task popup will be developed in Sprint 5.");

        });

    }

    // Notification

    const notification=document.getElementById("notificationBtn");

    if(notification){

        notification.addEventListener("click",function(){

            alert("Notification Center Coming Soon.");

        });

    }

    // Profile

    const profile=document.getElementById("profileBtn");

    if(profile){

        profile.addEventListener("click",function(){

            alert("User Profile Coming Soon.");

        });

    }

}

/* ==========================================================
   SEARCH
========================================================== */

function initializeSearch(){

    const search=document.getElementById("searchTask");

    if(!search) return;

    search.addEventListener("keyup",function(){

        const keyword=this.value.toLowerCase();

        const cards=document.querySelectorAll(".task-card");

        cards.forEach(function(card){

            if(card.innerText.toLowerCase().includes(keyword)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}

/* ==========================================================
   TASK POPUP
========================================================== */

function initializeCards(){

    const cards=document.querySelectorAll(".task-card");

    const modal=document.getElementById("taskModal");

    const close=document.getElementById("closeModal");

    cards.forEach(function(card){

        card.addEventListener("click",function(){

            modal.style.display="block";

        });

    });

    close.addEventListener("click",function(){

        modal.style.display="none";

    });

    window.addEventListener("click",function(event){

        if(event.target===modal){

            modal.style.display="none";

        }

    });

}
"use strict";

/*==========================================================
ONEPWS TASK BOARD ENGINE V2.0
==========================================================*/

document.addEventListener("DOMContentLoaded", initializeTaskBoard);

/*==========================================================
APPLICATION STARTUP
==========================================================*/

function initializeTaskBoard(){

    console.log("ONEPWS Task Board Started");

    initializeButtons();

    /*==========================================================
BUTTON ENGINE
==========================================================*/

function initializeButtons(){

    const backBtn = document.getElementById("backBtn");

    if(backBtn){

        backBtn.addEventListener("click",function(){

            window.location.href="../projectdashboard/projectdashboard.html";

        });

    }

    const newTaskBtn=document.getElementById("newTaskBtn");

    if(newTaskBtn){

        newTaskBtn.addEventListener("click",function(){

            showMessage("New Task module coming in Version 2.1");

        });

    }

    const childTaskBtn=document.getElementById("childTaskBtn");

    if(childTaskBtn){

        childTaskBtn.addEventListener("click",function(){

            showMessage("Child Task module coming in Version 2.1");

        });

    }

    const notificationBtn=document.getElementById("notificationBtn");

    if(notificationBtn){

        notificationBtn.addEventListener("click",function(){

            showMessage("Notification Center coming soon.");

        });

    }

    const profileBtn=document.getElementById("profileBtn");

    if(profileBtn){

        profileBtn.addEventListener("click",function(){

            showMessage("Profile module coming soon.");

        });

    }

    
/*==========================================================
MESSAGE HELPER
==========================================================*/

function showMessage(message){

    alert(message);

}
}

    initializeSearch();

    initializeModal();

    initializeDragDrop();

    updateLaneCounts();

}
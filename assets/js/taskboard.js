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

    /*==========================================================
SEARCH ENGINE
==========================================================*/

function initializeSearch(){

    const searchBox=document.getElementById("searchTask");

    if(!searchBox) return;

    searchBox.addEventListener("keyup",function(){

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

    initializeModal();

    initializeDragDrop();

    /*==========================================================
DRAG ENGINE V2
==========================================================*/

function initializeDragDrop(){

    const cards=document.querySelectorAll(".task-card");

    const lanes=document.querySelectorAll(".lane-body");

    let draggedCard=null;

    cards.forEach(card=>{

        card.addEventListener("dragstart",function(){

            draggedCard=this;

            this.classList.add("dragging");

        });

        card.addEventListener("dragend",function(){

            this.classList.remove("dragging");

            lanes.forEach(l=>l.classList.remove("drag-over"));

        });

    });

    lanes.forEach(lane=>{

        lane.addEventListener("dragover",function(e){

            e.preventDefault();

        });

        lane.addEventListener("dragenter",function(e){

            e.preventDefault();

            this.classList.add("drag-over");

        });

        lane.addEventListener("dragleave",function(){

            this.classList.remove("drag-over");

        });

        lane.addEventListener("drop",function(e){

            e.preventDefault();

            this.classList.remove("drag-over");

            if(draggedCard){

                this.appendChild(draggedCard);

                updateLaneCounts();

            }

        });

    });

}

/*==========================================================
LANE COUNTER ENGINE
==========================================================*/

function updateLaneCounts(){

    document.querySelectorAll(".lane").forEach(lane=>{

        const count=lane.querySelectorAll(".task-card").length;

        const badge=lane.querySelector(".count");

        if(badge){

            badge.innerText=count;

        }

    });

}

    updateLaneCounts();

}

/*==========================================================
TASK DETAILS MODAL
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("taskModal");

    const closeBtn = document.getElementById("closeModal");

    const cards = document.querySelectorAll(".task-card");

    const tabs = document.querySelectorAll(".tab-btn");

    const contents = document.querySelectorAll(".tab-content");

    /*----------------------------------------
    OPEN MODAL
    ----------------------------------------*/

    cards.forEach(function(card){

        card.addEventListener("click", function(){

            modal.style.display = "flex";

        });

    });

    /*----------------------------------------
    CLOSE BUTTON
    ----------------------------------------*/

    closeBtn.addEventListener("click", function(){

        modal.style.display = "none";

    });

    /*----------------------------------------
    CLICK OUTSIDE
    ----------------------------------------*/

    window.addEventListener("click", function(e){

        if(e.target===modal){

            modal.style.display="none";

        }

    });

    /*----------------------------------------
    TAB SWITCHING
    ----------------------------------------*/

    tabs.forEach(function(tab){

        tab.addEventListener("click", function(){

            tabs.forEach(function(btn){

                btn.classList.remove("active");

            });

            contents.forEach(function(page){

                page.classList.remove("active");

            });

            this.classList.add("active");

            document.getElementById(this.dataset.tab).classList.add("active");

        });

    });

});
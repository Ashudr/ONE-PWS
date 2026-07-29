/*==========================================================
DRAG & DROP
==========================================================*/

function initializeDragDrop() {

    const cards = document.querySelectorAll(".task-card");

    const lanes = document.querySelectorAll(".lane-body");

    let draggedCard = null;

    cards.forEach(function(card){

        card.addEventListener("dragstart", function(){

            draggedCard = this;

            setTimeout(() => {

                this.style.opacity = "0.4";

            },0);

        });

        card.addEventListener("dragend", function(){

            this.style.opacity = "1";

        });

    });

    lanes.forEach(function(lane){

        lane.addEventListener("dragover", function(event){

            event.preventDefault();

        });

        lane.addEventListener("drop", function(event){

            event.preventDefault();

            if(draggedCard){

                this.appendChild(draggedCard);

            }

        });

    });

}
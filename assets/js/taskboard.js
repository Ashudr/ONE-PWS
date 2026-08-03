/*==========================================================
    ONEPWS ERP
    TASK BOARD
==========================================================*/

/*==========================================================
GLOBAL VARIABLES
==========================================================*/

let tasks = [];

let currentTaskId = null;

const STORAGE_KEY = "ONEPWS_TASKBOARD";

/*==========================================================
SAMPLE DATA
==========================================================*/

const sampleTasks = [

{
    id:1,
    projectNo:"SAP240125",
    projectName:"Corporate HQ",
    customer:"ABC Industries",
    assignedTo:"Ashu",
    priority:"High",
    status:"RFQ",
    progress:15,
    startDate:"2026-07-25",
    endDate:"2026-08-05",
    description:"Prepare RFQ documents",
    comments:2,
    attachments:1
},

{
    id:2,
    projectNo:"SAP240126",
    projectName:"Office Interior",
    customer:"XYZ Pvt Ltd",
    assignedTo:"RK",
    priority:"Medium",
    status:"INFO MISSING",
    progress:28,
    startDate:"2026-07-22",
    endDate:"2026-08-02",
    description:"Waiting for customer details",
    comments:4,
    attachments:0
},

{
    id:3,
    projectNo:"SAP240127",
    projectName:"Hospital Project",
    customer:"City Hospital",
    assignedTo:"SK",
    priority:"High",
    status:"WIP",
    progress:65,
    startDate:"2026-07-18",
    endDate:"2026-08-10",
    description:"Panel design in progress",
    comments:5,
    attachments:2
},

{
    id:4,
    projectNo:"SAP240128",
    projectName:"Hotel Lobby",
    customer:"Royal Hotels",
    assignedTo:"AM",
    priority:"Low",
    status:"QC",
    progress:82,
    startDate:"2026-07-15",
    endDate:"2026-08-01",
    description:"QC Inspection",
    comments:1,
    attachments:3
},

{
    id:5,
    projectNo:"SAP240129",
    projectName:"Airport Lounge",
    customer:"Airport Authority",
    assignedTo:"PM",
    priority:"Medium",
    status:"RESOLVED",
    progress:95,
    startDate:"2026-07-10",
    endDate:"2026-07-30",
    description:"Customer comments resolved",
    comments:7,
    attachments:4
},

{
    id:6,
    projectNo:"SAP240130",
    projectName:"School Building",
    customer:"Education Trust",
    assignedTo:"AJ",
    priority:"Low",
    status:"COMPLETED",
    progress:100,
    startDate:"2026-07-01",
    endDate:"2026-07-20",
    description:"Completed",
    comments:8,
    attachments:5
}

];

/*==========================================================
INITIALIZE
==========================================================*/

document.addEventListener("DOMContentLoaded",function(){

    loadTasks();

    renderBoard();

    updateCounters();

    initializeDragDrop();

});

/*==========================================================
LOAD TASKS
==========================================================*/

function loadTasks(){

    const data = localStorage.getItem(STORAGE_KEY);

    if(data){

        tasks = JSON.parse(data);

    }else{

        tasks = sampleTasks;

        saveTasks();

    }

}

/*==========================================================
SAVE TASKS
==========================================================*/

function saveTasks(){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );

}

/*==========================================================
RENDER BOARD
==========================================================*/

function renderBoard(){

    document.querySelectorAll(".card-container")
        .forEach(container=>container.innerHTML="");

    tasks.forEach(task=>{

        const card=createTaskCard(task);

        const lane=document.querySelector(
            `[data-column="${task.status}"]`
        );

        if(lane){

            lane.appendChild(card);

        }

    });

}

/*==========================================================
CREATE CARD
==========================================================*/

function createTaskCard(task){

    const card=document.createElement("div");

    card.className=`task-card ${task.priority.toLowerCase()}`;

    card.draggable=true;

    card.dataset.id=task.id;

    card.innerHTML=`

    <div class="card-header">

        <div>

            <div class="project-number">${task.projectNo}</div>

            <div class="project-name">${task.projectName}</div>

            <div class="customer-name">${task.customer}</div>

        </div>

        <button class="more-btn">

            <i class="fa-solid fa-ellipsis"></i>

        </button>

    </div>

    <div class="progress-section">

        <div class="progress-top">

            <span>Progress</span>

            <strong>${task.progress}%</strong>

        </div>

        <div class="progress-bar">

            <div class="progress-fill"

            style="width:${task.progress}%">

            </div>

        </div>

    </div>

    <div class="countdown">

        <i class="fa-regular fa-clock"></i>

        ${getRemainingDays(task.endDate)}

    </div>

    <div class="card-footer">

        <div class="user-chip">

            <div class="user-avatar">

                ${task.assignedTo.substring(0,2).toUpperCase()}

            </div>

            <span class="user-name">

                ${task.assignedTo}

            </span>

        </div>

        <div class="priority ${task.priority.toLowerCase()}">

            ${task.priority}

        </div>

    </div>

    <div class="card-info">

        <span>

            <i class="fa-regular fa-comment"></i>

            ${task.comments}

        </span>

        <span>

            <i class="fa-solid fa-paperclip"></i>

            ${task.attachments}

        </span>

    </div>

    `;

card.addEventListener("click", function () {

    openTask(task.id);

});

    return card;

}

/*==========================================================
REMAINING DAYS
==========================================================*/

function getRemainingDays(endDate){

    const today=new Date();

    const end=new Date(endDate);

    const diff=Math.ceil(

        (end-today)/(1000*60*60*24)

    );

    if(diff<0){

        return "Overdue";

    }

    if(diff===0){

        return "Due Today";

    }

    if(diff===1){

        return "1 Day Left";

    }

    return diff+" Days Left";

}

/*==========================================================
UPDATE COUNTERS
==========================================================*/

function updateCounters(){

    document.getElementById("count-rfq").textContent =
        tasks.filter(t=>t.status==="RFQ").length;

    document.getElementById("count-info").textContent =
        tasks.filter(t=>t.status==="INFO MISSING").length;

    document.getElementById("count-wip").textContent =
        tasks.filter(t=>t.status==="WIP").length;

    document.getElementById("count-qc").textContent =
        tasks.filter(t=>t.status==="QC").length;

    document.getElementById("count-resolved").textContent =
        tasks.filter(t=>t.status==="RESOLVED").length;

    document.getElementById("count-completed").textContent =
        tasks.filter(t=>t.status==="COMPLETED").length;

}

/*==========================================================
DRAG & DROP
==========================================================*/

function initializeDragDrop(){

    document.addEventListener("dragstart",dragStart);

    document.addEventListener("dragend",dragEnd);

    document.querySelectorAll(".card-container")
        .forEach(container=>{

            container.addEventListener("dragover",dragOver);

            container.addEventListener("drop",dropCard);

            container.addEventListener("dragleave",dragLeave);

        });

}

function dragStart(e){

    if(!e.target.classList.contains("task-card")) return;

    e.target.classList.add("dragging");

    e.dataTransfer.setData(
        "text/plain",
        e.target.dataset.id
    );

}

function dragEnd(e){

    if(e.target.classList.contains("task-card")){

        e.target.classList.remove("dragging");

    }

    document.querySelectorAll(".card-container")
        .forEach(c=>c.classList.remove("drag-over"));

}

function dragOver(e){

    e.preventDefault();

    this.classList.add("drag-over");

}

function dragLeave(){

    this.classList.remove("drag-over");

}

function dropCard(e){

    e.preventDefault();

    this.classList.remove("drag-over");

    const id=parseInt(
        e.dataTransfer.getData("text/plain")
    );

    const newStatus=this.dataset.column;

    const task=tasks.find(t=>t.id===id);

    if(!task) return;

    task.status=newStatus;

    saveTasks();

    renderBoard();

    updateCounters();

}

/*==========================================================
SEARCH
==========================================================*/

const searchBox=document.getElementById("searchInput");

if(searchBox){

    searchBox.addEventListener("keyup",searchTask);

}

function searchTask(){

    const keyword=this.value.toLowerCase();

    document.querySelectorAll(".task-card")
        .forEach(card=>{

            const text=card.innerText.toLowerCase();

            if(text.includes(keyword)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

}

/*==========================================================
FILTER
==========================================================*/

const priorityFilter=document.getElementById("priorityFilter");

if(priorityFilter){

    priorityFilter.addEventListener(
        "change",
        filterPriority
    );

}

function filterPriority(){

    const value=this.value;

    renderBoard();

    if(value==="All") return;

    document.querySelectorAll(".task-card")
        .forEach(card=>{

            if(!card.classList.contains(value.toLowerCase())){

                card.style.display="none";

            }

        });

}

/*==========================================================
TOAST
==========================================================*/

function openTask(id){

    currentTaskId = id;

    const task = tasks.find(t => t.id === id);

    if(!task) return;

    document.getElementById("projectNo").value = task.projectNo;
    document.getElementById("projectName").value = task.projectName;
    document.getElementById("customer").value = task.customer;
    document.getElementById("businessUnit").value = task.businessUnit || "";
    document.getElementById("moduleName").value = task.moduleName || "";
    document.getElementById("assignedTo").value = task.assignedTo;
    document.getElementById("priority").value = task.priority;
    document.getElementById("status").value = task.status;
    document.getElementById("startDate").value = task.startDate;
    document.getElementById("endDate").value = task.endDate;
    document.getElementById("description").value = task.description;

    document.getElementById("modalTaskTitle").innerText =
        task.projectName;

    document.getElementById("modalProjectNumber").innerText =
        task.projectNo;

    document.getElementById("taskModal").style.display = "flex";
}


/*==========================================================
ADD NEW TASK
==========================================================*/

const addTaskBtn = document.getElementById("addTaskBtn");

if(addTaskBtn){
    addTaskBtn.addEventListener("click", newTask);
}

function newTask(){

    currentTaskId = null;

    document.getElementById("projectNo").value = "";
    document.getElementById("projectName").value = "";
    document.getElementById("customer").value = "";
    document.getElementById("businessUnit").value = "";
    document.getElementById("moduleName").value = "";
    document.getElementById("assignedTo").value = "";
    document.getElementById("priority").value = "Medium";
    document.getElementById("status").value = "RFQ";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("description").value = "";

    document.getElementById("modalTaskTitle").innerText = "New Task";
    document.getElementById("modalProjectNumber").innerText = "";

    document.getElementById("taskModal").style.display = "flex";
}

/*==========================================================
SAVE TASK
==========================================================*/

document
.getElementById("saveTask")
.addEventListener("click", saveTask);

function saveTask(){

    const task={

        id: currentTaskId || Date.now(),

        projectNo:document.getElementById("projectNo").value,

        projectName:document.getElementById("projectName").value,

        customer:document.getElementById("customer").value,

        assignedTo:document.getElementById("assignedTo").value,

        priority:document.getElementById("priority").value,

        status:document.getElementById("status").value,

        startDate:document.getElementById("startDate").value,

        endDate:document.getElementById("endDate").value,

        description:document.getElementById("description").value,

        progress:0,

        comments:0,

        attachments:0

    };

    if(currentTaskId){

        const index=tasks.findIndex(
            t=>t.id===currentTaskId
        );

        task.progress = tasks[index].progress;
        task.comments = tasks[index].comments;
        task.attachments = tasks[index].attachments;

        tasks[index]=task;

    }else{

        tasks.push(task);

    }

    saveTasks();

    renderBoard();

    updateCounters();

    closeModal();

    showToast("Task Saved Successfully");

}

/*==========================================================
DELETE
==========================================================*/

document
.getElementById("deleteTask")
.addEventListener("click", deleteTask);

function deleteTask(){

    if(currentTaskId==null){

        closeModal();

        return;

    }

    tasks=tasks.filter(
        t=>t.id!==currentTaskId
    );

    saveTasks();

    renderBoard();

    updateCounters();

    closeModal();

    showToast("Task Deleted","warning");

}

/*==========================================================
CLOSE MODAL
==========================================================*/

document
.getElementById("closeModal")
.addEventListener("click", closeModal);

function closeModal(){

    document.getElementById("taskModal").style.display = "none";

}

/*==========================================================
CLICK OUTSIDE MODAL
==========================================================*/

document
.getElementById("taskModal")
.addEventListener("click",function(e){

    if(e.target===this){

        closeModal();

    }

});

/*==========================================================
ESC KEY
==========================================================*/

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeModal();

    }

});

/*==========================================================
LIVE COUNTDOWN
==========================================================*/

setInterval(function(){

    renderBoard();

    updateCounters();

},60000);

/*==========================================================
SORT BY END DATE
==========================================================*/

function sortByEndDate(){

    tasks.sort(function(a,b){

        return new Date(a.endDate)-new Date(b.endDate);

    });

    renderBoard();

}

/*==========================================================
SORT BY PRIORITY
==========================================================*/

function sortByPriority(){

    const order={

        High:1,

        Medium:2,

        Low:3

    };

    tasks.sort(function(a,b){

        return order[a.priority]-order[b.priority];

    });

    renderBoard();

}

/*==========================================================
RESET STORAGE
==========================================================*/

function resetBoard(){

    if(confirm("Reset all tasks?")){

        localStorage.removeItem(STORAGE_KEY);

        tasks=[...sampleTasks];

        saveTasks();

        renderBoard();

        updateCounters();

        showToast("Board Reset");

    }

}

/*==========================================================
UTILITY
==========================================================*/

function getTaskById(id){

    return tasks.find(t=>t.id===id);

}

function generateProjectNumber(){

    return "SAP"+Date.now();

}

/*==========================================================
END
==========================================================*/

console.log("ONEPWS Task Board Loaded Successfully");


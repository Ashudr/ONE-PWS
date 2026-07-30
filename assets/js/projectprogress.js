/*==========================================================
ONEPWS PROJECT CONTROL ROOM
PROGRESS BOARD JAVASCRIPT
==========================================================*/


document.addEventListener("DOMContentLoaded", function(){



/*==========================================================
OVERALL COMPLETION CHART
==========================================================*/


const completionChart =
document.getElementById("completionChart");


if(completionChart){


new Chart(completionChart, {


type:"doughnut",


data:{


labels:[

"Completed",

"Remaining"

],


datasets:[{


data:[72,28],


borderWidth:0


}]


},



options:{


responsive:true,


cutout:"75%",


plugins:{


legend:{


position:"bottom"


}


}


}



});


}







/*==========================================================
MODULE CONTRIBUTION CHART
==========================================================*/


const moduleChart =
document.getElementById("moduleChart");



if(moduleChart){


new Chart(moduleChart,{


type:"doughnut",


data:{


labels:[

"Ceiling",

"Paneling",

"Partition",

"Flooring",

"Door",

"Window",

"Electrical",

"Furniture"

],



datasets:[{


data:[

15,

18,

12,

10,

8,

12,

15,

10

],


borderWidth:0


}]


},




options:{


responsive:true,


plugins:{


legend:{


position:"right"


}


}


}



});


}






/*==========================================================
LIVE PROJECT DATA STRUCTURE

(Ready for database connection later)

==========================================================*/


const projectProgress = {


projectName:
"Corporate Headquarters Development",


overall:
72,


modules:{


Ceiling:90,

Paneling:75,

Partition:65,

Flooring:55,

Door:70,

Window:80,

Electrical:60,

Furniture:45


},



alerts:[


"Flooring Material Delay",

"Electrical Approval Pending",

"Client Approval Waiting"


]


};




console.log(
"ONEPWS Progress Loaded",
projectProgress
);



});
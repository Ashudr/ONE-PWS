const ctx =
document.getElementById('progressChart');


new Chart(ctx, {


type:'doughnut',


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


plugins:{


legend:{


position:'bottom'


}


}



}


});
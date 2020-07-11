var min = 0;
var sec = 0;
var msec = 0;


var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");


var interval;

function timer()
{
    msec++
    msecHeading.innerHTML= msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0
    }
    
}

function start(){
    interval = setInterval(timer,10)
    document.getElementById("start").disabled = true;
}


function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
    
}


function reset(){
    msec=0;
    sec=0;
    min=0;

    msecHeading.innerHTML= msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;

    clearInterval(interval)

}

var saveHeading1;
var saveHeading2;
var saveHeading3;

var count = 0;

function save(){

    count++

    if(count == 1)
    {save1()
        }
    else if(count == 2)
    {save2()
        }
    else if(count == 3)
    {save3()
        count = 0;}

}



function save1(){

    saveHeading1 = document.getElementById("record1");
    saveHeading2 = document.getElementById("record2");
    saveHeading3 = document.getElementById("record3");

    saveHeading1.innerHTML = min;
    saveHeading2.innerHTML = sec;
    saveHeading3.innerHTML = msec;
    

}

function save2(){


    saveHeading1 = document.getElementById("record4");
    saveHeading2 = document.getElementById("record5");
    saveHeading3 = document.getElementById("record6");


    saveHeading1.innerHTML = min;
    saveHeading2.innerHTML = sec;
    saveHeading3.innerHTML = msec;
    
    

}

function save3(){


    saveHeading1 = document.getElementById("record7");
    saveHeading2 = document.getElementById("record8");
    saveHeading3 = document.getElementById("record9");



    saveHeading1.innerHTML = min;
    saveHeading2.innerHTML = sec;
    saveHeading3.innerHTML = msec;
    

}

function del(){
    msec = 0;
    sec = 0;
    min = 0;

    saveHeading1 = document.getElementById("record1");
    saveHeading2 = document.getElementById("record2");
    saveHeading3 = document.getElementById("record3");

    saveHeading1.innerHTML = min;
    saveHeading2.innerHTML = sec;
    saveHeading3.innerHTML = msec;

    saveHeading1 = document.getElementById("record4");
    saveHeading2 = document.getElementById("record5");
    saveHeading3 = document.getElementById("record6");

    saveHeading1.innerHTML = min;
    saveHeading2.innerHTML = sec;
    saveHeading3.innerHTML = msec;

    saveHeading1 = document.getElementById("record7");
    saveHeading2 = document.getElementById("record8");
    saveHeading3 = document.getElementById("record9");

    saveHeading1.innerHTML = min;
    saveHeading2.innerHTML = sec;
    saveHeading3.innerHTML = msec;

    saveHeading1 = document.getElementById("record1");
    saveHeading2 = document.getElementById("record2");
    saveHeading3 = document.getElementById("record3");

    
}
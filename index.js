
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopWatch();
}

function stop(){

    timer = false
    
}

function reset(){
    timer = false;

  hr = 0;
  min = 0;
  sec = 0;
  count = 0
  document.querySelector('#hr').innerHTML = "00";
  document.querySelector('#min').innerHTML = "00";
  document.querySelector('#sec').innerHTML = "00";
  document.querySelector('#count').innerHTML = "00";

}

function stopWatch(){
    if(timer == true){
        count = count+1;
        if(count == 100){
            sec=sec+1;
            count=0;
        }
        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec =0;
        }
        
        // document.querySelector("#count").innerHTML = count;

        if (count <10){
            document.querySelector("#count").innerHTML = "0"+count;
        }else{
        document.querySelector("#count").innerHTML = count;
        }

        if (sec <10){
            document.querySelector("#sec").innerHTML = "0"+sec;
        }else{
        document.querySelector("#sec").innerHTML = sec;
        }

        if (min <10){
            document.querySelector("#min").innerHTML = "0"+min;
        }else{
        document.querySelector("#min").innerHTML = min;
        }

        if (hr <10){
            document.querySelector("#hr").innerHTML = "0"+hr;
        }else{
        document.querySelector("#hr").innerHTML = hr;
        }

        setTimeout("stopWatch()",7.9);
    }
}

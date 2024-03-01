var incheckId = document.getElementById("in-check");
var paraId = document.getElementById("para");
var containerId = document.getElementById("container");


var count = 1;

incheckId.addEventListener('click',function(){

    if(count == 1){
    paraId.style.color = "white";
    containerId.style.backgroundColor = "black";
    count --;
   }else if(count == 0) {
    paraId.style.color = "black";
    containerId.style.backgroundColor = "white";
    count ++;
   }
})

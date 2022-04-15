let num = 0;
count = document.getElementById("count");

function counterColor(){
    count.innerText = num;

    if (num == 0){
        count.style.color = "black";
    }
    else if (num <= -1){
        count.style.color = "red";
    }
    else if(num >= 1){
        count.style.color = "green";
    }
}
function decrease(){
    num-=1;
    counterColor();
}
function increase(){
    num+=1;
    counterColor();
}
function reset(){
    num = 0;
    counterColor();
}

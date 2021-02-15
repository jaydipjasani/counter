let count = 0;

function increment(){
    count++;
    document.getElementById("display").innerHTML = count;
    if(count > 0){
    document.getElementById("display").style.color = "green";
    }
}

function decrement(){
    count--;
    document.getElementById("display").innerHTML = count;
    if(count < 0){
        document.getElementById("display").style.color = "red";
        }
}
function reset(){
    count = 0;
    document.getElementById("display").innerHTML = count;
    if(count === 0){
        document.getElementById("display").style.color = "black";
        }
}

if(count > 0){
    document.getElementById("display").style.color = "pink";
    console.log("i m called");
}
const decress = document.getElementById("decress");
const reset = document.getElementById("reset");
const increse = document.getElementById("increse");
const countLabel = document.getElementById("countLabel")
let count = 0;

increse.onclick = function(){
    count++
    countLabel.textContent=count
}
decress.onclick = function(){
    count--;
    countLabel.textContent=count
}
reset.onclick = function(){
    count=0;
    countLabel.textContent=count
}

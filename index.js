
// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

/*let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

let student = 30

student -=1
console.log(student)

let usser;
usser = window.prompt("your user");
console.log(usser)

document.getElementById("submit").onclick = function(){
    usser = document.getElementById("text").value
    document.getElementById("h1").textContent = "hello ${usser}"
} 

let age = window.prompt("your age")
age = Number(age) //covert sting to number
age+=1;

console.log(age)

let x ="pizza";//NAN
let y="pizza";//String
let z="pizza";//true ila kante rawya donc false 
x = Number(x)
y = String(y)
z = Boolean(z)

CALCULATE

const p=3.14
let radius;
let circle;


document.getElementById("submit").onclick = function() {
    // Get the value from the input field and convert it to a number
    radius = Number(document.getElementById("ja").value);
    
    // Calculate the circumference of the circle
    circle = 2 * p * radius;
    
    // Update the content of the element with ID "H3"
    document.getElementById("H3").textContent = circle;
};
*/
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
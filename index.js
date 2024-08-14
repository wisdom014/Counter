let numbers = 0;
const colors = ["green", "red", "blue"];
let btn = document.querySelectorAll(".btn")
let increasebtn = document.getElementById("increaseBtn");
let decreasebtn = document.getElementById("decreaseBtn");
let resetbtn = document.getElementById("resetBtn");


increasebtn.addEventListener("click", function(){
  numbers+=1;
  document.getElementById("number").innerHTML = numbers;
       if (numbers > 0) {
       document.body.style.color = "green"; 
    }
 });

decreasebtn.addEventListener("click", function(){
  numbers-=1;
  document.getElementById("number").innerHTML = numbers;
      if (numbers < 0) {
      document.body.style.color = "red";
    }
 });

resetbtn.addEventListener("click", function(){
  numbers = 0;
  document.getElementById("number").innerHTML = numbers;
      if (numbers === 0) {
      document.body.style.color = "blue";
    }
 });
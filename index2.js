let numbers = 0;
let btn = document.querySelectorAll(".btn")
let increasebtn = document.getElementById("increaseBtn");
let decreasebtn = document.getElementById("decreaseBtn");
let resetbtn = document.getElementById("resetBtn");


increasebtn.addEventListener("click", function(){
  numbers+=1;
  document.getElementById("number").innerHTML = numbers;
 });

decreasebtn.addEventListener("click", function(){
  numbers-=1;
  document.getElementById("number").innerHTML = numbers;
 });

resetbtn.addEventListener("click", function(){
  numbers = 0;
  document.getElementById("number").innerHTML = numbers;
 });
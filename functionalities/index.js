const changeColor = ["green", "blue" ,"#3752FD","#63f0f4","#4cb7ba","#4ca8ba"];
let index = 0;

document.getElementById("theme-btn").addEventListener("click", function() {
  document.getElementById("body").style.background = changeColor[index];
  index = (index + 1) % changeColor.length
});

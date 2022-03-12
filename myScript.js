generator.addEventListener("click", function() {
  //check to see if the new color block exists, delete if so
  let checker = document.getElementById("colorBlock");
  if (checker != null) {
    document.body.style.backgroundColor = document.getElementById("colorBlock").style.backgroundColor;
    checker.remove();
  }
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  let para = document.createElement("div");
  para.setAttribute("id","colorBlock");
  document.body.appendChild(para);
  document.getElementById("colorBlock").style.backgroundColor = "#" + randomColor;
  document.getElementById("descriptor").innerHTML = "The current color is #" + randomColor;
});


function getInitialColor() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  document.getElementById("descriptor").innerHTML = "The current color is #" + randomColor;
}

getInitialColor();
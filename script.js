var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function changeGradientColors(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getBackgroundColors(){
    var bodyBG = getComputedStyle(body, null).getPropertyValue("background-image");
    return css.textContent= bodyBG;
}

function randomBg(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.setAttribute("value", "#"+randomColor1);
    color2.setAttribute("value", "#"+randomColor2);
    body.style.background = "linear-gradient(to right, "+ "#" + randomColor1 + "," + "#" + randomColor2 + ")";
    css.textContent = body.style.background + ";";
    console.log(randomColor1, randomColor2)
}

getBackgroundColors();
color1.addEventListener("input", changeGradientColors);
color2.addEventListener("input", changeGradientColors);
button.addEventListener("click", randomBg);


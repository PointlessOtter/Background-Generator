var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function firstGradient() {
	var col1 = randomColorGenerator();
	var col2 = randomColorGenerator();
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1 
	+ ", " 
	+ col2  
	+ ")";
	css.textContent = body.style.background;
	color1.value = col1;
	color2.value = col2;
}

function randomColorGenerator() {
	var color = "#";
	var possible = "ABCDEF0123456789";
	for (var i = 0; i < 6; i++) {
		color += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return color;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background;
}

function randomColorButton() {
	firstGradient();
}

firstGradient();

random.addEventListener("click", randomColorButton)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomColorButton = document.querySelector('.randomColorButton');
var gradientDirection = document.querySelector('.gradientRange');
var randomGradientButton = document.querySelector('.randomDirectionButton');

function randomColorValue (){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setGradient (){
	body.style.background =
		'linear-gradient(' + gradientDirection.value + 'deg, ' + color1.value + ', ' + color2.value + ')';
	css.textContent = body.style.background + ';';
}

setGradient();

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
gradientDirection.addEventListener('input', setGradient);
randomColorButton.addEventListener('click', function (){
	color1.value = randomColorValue();
	color2.value = randomColorValue();
	setGradient();
});
randomGradientButton.addEventListener('click', function (){
	gradientDirection.value = 10 * Math.floor(Math.random() * 36);
	setGradient();
});

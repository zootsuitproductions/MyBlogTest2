var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll("div.square"); 
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode button event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		});
	}
	//mode end

	//square event listeners
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function(){
			if (this.style.backgroundColor === pickedColor) {
				messageDisplay.textContent = "You got it!";
				resetButton.textContent = "Play Again?"
				changeColor();
				h1.style.backgroundColor = pickedColor;

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	//end of squares


	//start the game
	reset();

}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";	
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});

function selectDifficulty() {
	easyB.classList.toggle("selected");
	hardB.classList.toggle("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
}


function changeColor() {
	//loop thru all squares and change their color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor() {
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(colorCount) {
	var arr = [];
	for (var i = 0; i < colorCount; i++) {
		arr[i] = "rgb(" + String(Math.floor(Math.random()*256))+ ", " + String(Math.floor(Math.random()*256))+ ", " + String(Math.floor(Math.random()*256))+ ")";
	}
	return arr;
}
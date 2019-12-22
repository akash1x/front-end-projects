var sqnum = 6;
var colors = [];
colors = fillcolors(sqnum);

var sqBox = document.querySelectorAll(".square");
var goalColor = document.querySelector("#goal-color")
var heading = document.querySelector("h1");
var gameConsole = document.querySelector("#console");
var resetBtn = document.querySelector("#play-again");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
hardBtn.classList.add("selected");
var pickedColor = "";


goalColor.textContent = goalGeneratorColor();
var winColor = goalColor.textContent;

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    sqnum = 3;
    colors = fillcolors(sqnum);
    goalColor.textContent = goalGeneratorColor();
    winColor = goalColor.textContent;
    heading.style.backgroundColor = "steelblue";
    gameConsole.textContent = "";

    for (var i = 0; i < sqBox.length; i++) {
        if (colors[i]) {
            sqBox[i].style.backgroundColor = colors[i];
        } else {
            sqBox[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    sqnum = 6;
    colors = fillcolors(sqnum);
    goalColor.textContent = goalGeneratorColor();
    winColor = goalColor.textContent;
    heading.style.backgroundColor = "steelblue";
    gameConsole.textContent = "";
    for (var i = 0; i < sqBox.length; i++) {
        sqBox[i].style.display = "block";
        sqBox[i].style.backgroundColor = colors[i];
    }
});


resetBtn.addEventListener("click", function() {
    //change all the squares to new colors
    colors = fillcolors(sqnum);
    //update the console message
    gameConsole.textContent = "";
    //reset variables
    pickedColor = "";
    goalColor.textContent = goalGeneratorColor();
    heading.style.backgroundColor = "steelblue";
    winColor = goalColor.textContent;
    resetBtn.textContent = "New Game"

    for (var i = 0; i < sqBox.length; i++) {
        sqBox[i].style.backgroundColor = colors[i];
    }
});







for (var i = 0; i < sqBox.length; i++) {
    sqBox[i].style.backgroundColor = colors[i];
    sqBox[i].addEventListener("click", function() {
        pickedColor = this.style.backgroundColor;
        if (pickedColor == winColor) {
            heading.style.backgroundColor = winColor;
            changeColors(pickedColor);
            gameConsole.textContent = "Correct"
            resetBtn.textContent = "Play Again?"

        } else {
            this.style.backgroundColor = "black";
            gameConsole.textContent = "Try Again"

        }
    });
}


function changeColors(pickedColor) {
    for (var i = 0; i < sqBox.length; i++) {
        sqBox[i].style.backgroundColor = pickedColor;
    }
}

function goalGeneratorColor() {

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function fillcolors(x) {
    var arr = [];

    for (var i = 0; i < x; i++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return arr;
}
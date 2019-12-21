var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset = document.querySelector("#reset");
var input = document.querySelector("input[type='number']");
var gametill = document.querySelector("#game-till");
var gameover = false;
var p1score = 0;
var p2score = 0;
var goal = 0;



p1btn.addEventListener("click", function() {
    if (!gameover) {
        p1score++;
        p1display.textContent = p1score;
        if (p1score == goal) {
            p1display.classList.add("winner");
            gameover = true;
        }
    }

});




p2btn.addEventListener("click", function() {
    if (!gameover) {
        p2score++;
        p2display.textContent = p2score;
        if (p2score == goal) {
            p2display.classList.add("winner");
            gameover = true;
        }
    }

});




input.addEventListener("change", function() {
    groundZero();
    goal = input.value;
    gametill.textContent = input.value;

});

reset.addEventListener("click", groundZero);



function groundZero() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gametill.textContent = "Enter Goal score of the Game";
    gameover = false;
};
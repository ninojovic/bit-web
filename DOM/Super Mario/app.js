//DOM SELECTORS
var background = document.querySelector("background");
var mario = document.querySelector("img[alt='mario']");
var marioRun = document.querySelector("img[alt='mario_run']");
var marioJump = document.querySelector("img[alt='mario_jump']");

//KEY AND DIRECTION MAPPING
var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
}

var leftDirection = -10;
var rightDirection = 10;

//BACKGROUND MOVE FUNCTION
function backgroundMove(direction) {
    if (direction > 0) {
        marioRun.style.transform = "scaleX(-1)";
    } else {
        marioRun.style.transform = "scaleX(1)";
    }
    var currentOffset = parseInt(background.style.backgroundPositionX);
    background.style.backgroundPositionX = (parseInt(currentOffset) + direction) + "px";
}

//PICTURE TOGGLE FUNCTIONS
var showMarioRun = function () {
    mario.style.display = "none";
    marioJump.style.display = "none";
    marioRun.style.display = "block";
}
var showMarioJump = function () {
    mario.style.display = "none";
    marioJump.style.display = "block";
    marioRun.style.display = "none";
}
var showMarioStand = function () {
    mario.style.display = "block";
    marioJump.style.display = "none";
    marioRun.style.display = "none";
}

//KEYDOWN EVENT HANDLER
document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case key.left:
            showMarioRun();
            backgroundMove(rightDirection);
            break;
        case key.right:
            showMarioRun();
            backgroundMove(leftDirection);
            break;
        case key.up:
        //JUMP MARIO
            break;
        default:
            break;
    }
})

//KEYUP EVENT HANDLER
document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case key.left:
            mario.style.transform = "scaleX(-1)";
            showMarioStand();
            break;
        case key.right:
            mario.style.transform = "scaleX(1)";
            showMarioStand();
            break;
        default:
            break;
    }
})
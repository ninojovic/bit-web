$(function () {
    increase();
})

function increase() {
    $(".box").animate({
        "top": "500px",
        "left": "500px",
        "width": "100px",
        "height": "100px",
        "border-radius": "100px",
    }, 2000, decrease);
}

function decrease() {
    $(".box").animate({
        "top": "20px",
        "left": "20px",
        "width": "500px",
        "height": "500px",
        "border-radius": "0px",
    }, 2000, increase);
}

window.setInterval(function () {
    var currentColor = "rgb(" + getRandom() + "," + getRandom() + "," + getRandom() + ")";
    $(".box").css("background-color", currentColor);
}, 500);


function getRandom() {
    return Math.floor((255 - 0) * Math.random() + 0);
}
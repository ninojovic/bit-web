var dotColor = "white";

var mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}

document.querySelector("#black").addEventListener("click", function () {
    dotColor = "black";
})

document.querySelector("#white").addEventListener("click", function () {
    dotColor = "white";
})

document.querySelector("div").addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    document.querySelector("#first").textContent = x;
    document.querySelector("#second").textContent = y;
    if(mouseDown){
    drawDot(x, y);
    }
})


function drawDot(x, y) {
    var dot = document.createElement("h5");
    dot.textContent = "*";
    dot.className = dotColor;
    dot.style.left = x + "px";
    dot.style.top = y + "px";
            
    document.querySelector("container").appendChild(dot);
}
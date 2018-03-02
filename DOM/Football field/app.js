var move = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var img = document.querySelector("img");

    img.style.top = y - 50 + "px";
    img.style.left = x - 50 + "px";
}

var toggle = true;

var toggleMoving = function () {
    if (toggle) {
        document.removeEventListener("click", move);
        toggle = !toggle;
    } else {
        document.addEventListener("click", move);
        toggle = !toggle;
    }
}

document.addEventListener("click", move);

document.querySelector("button").addEventListener("click", toggleMoving)

// var mousedown = 0;

// document.addEventListener("mousedown", function (){
//     mousedown++;
//     console.log(mousedown);
// })

// document.addEventListener("mouseup", function (){
//     mousedown--;
// })

// document.addEventListener("mousemove", function (e){
//     if (mousedown){
//         move(e)
//     }
// })
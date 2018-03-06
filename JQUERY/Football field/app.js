var toggle = true;

function move(e) {
    var x = e.clientX;
    var y = e.clientY;
    var img = $("img");
    
    img.animate({
        top: y - 50,
        left: x - 50
    }, "slow");
}


$(document).on("click", move);
$("button").on("click", function () {
    if (toggle) {
        $(document).off("click", move);
        toggle = false;
    } else {
        $(document).on("click", move);
        toggle = true;
    }
    
})
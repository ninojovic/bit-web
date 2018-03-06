var $selectedImg = $("img.selected");

function switchBorders (){
    $selectedImg.toggleClass("selected");
    $selectedImg.parent().next().children().eq(1).toggleClass("selected");
}

$("#trigger").on("click", switchBorders);
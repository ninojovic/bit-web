// var imagesList = ["http://via.placeholder.com/200x100", "http://via.placeholder.com/400x200", "http://via.placeholder.com/600x300", "http://via.placeholder.com/600x300", "http://via.placeholder.com/600x300"];


// function createGallery() {
    
//     var $headline = $("<h1>Amazing Gallery</h1>")

//     $("body").append("<div class='container'><div>");

//     $("div.container").append($headline);

//     for (var i = 0; i < imagesList.length; i++) {
//         var $img = $("<img>");
//         $img.attr("src", imagesList[i]);
//         $("div.container").append($img);
//     }

//     $("img").each(function (index, element){
//         var randomWidth = (Math.floor((500 - 50) * Math.random() + 50)) + "px";
//         $(this).css({
//             "width": randomWidth,
//         })
//         var elWidth = parseInt($(this).css("width"))
//         if (elWidth < 200) {
//             $(this).css("border", "solid 1px green");
//         } else {
//             return;
//         }
//     })
// }

var imageLink = "https://picsum.photos/200/300/?random";

function createGalleryBtn () {
    var $btn = $("<button>");
    $btn.attr("id", "createGallery")
    $btn.text("Create Gallery")
    $btn.css({
        "width": "200px",
        "height": "50px",
        "display": "block",
        "margin": "10px auto",
        "border-radius": "10px",
    });
    $("body").prepend($btn);
}

function createInput () {
    var $input = $("<input id='numOfPics'>");
    $input.attr("placeholder", "Number of pics")
    $input.css({
        "width": "150px",
        "height": "20px",
        "display": "block",
        "margin": "10px auto",
        "border-radius": "10px",
        "border": "1px solid black",
        "text-align": "center",
    })
    $("body").append($input);
}

function createGallery(numberOfPics) {

    var numberOfPics = $("#numOfPics").val();
    
    var $headline = $("<h1>Amazing Gallery</h1>")

    $("div.container").remove();
    $("body").append("<div class='container'><div>");

    $("div.container").append($headline);

    for (var i = 0; i < numberOfPics; i++) {
        var $img = $("<img>");
        $img.attr("src", imageLink);
        $("div.container").append($img);
    }

    $("img").each(function (index, element){
        var randomWidth = (Math.floor((300 - 50) * Math.random() + 50)) + "px";
        $(this).css({
            "width": randomWidth,
        })
        var elWidth = parseInt($(this).css("width"))
        if (elWidth < 200) {
            $(this).css("border", "solid 1px green");
        } else {
            return;
        }
    })
}

createInput();
createGalleryBtn();

$("#createGallery").click(createGallery);

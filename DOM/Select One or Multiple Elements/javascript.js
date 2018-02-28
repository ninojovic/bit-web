function selectBackground(selector, className){
    var elList = document.querySelectorAll(selector);
    elList[1].setAttribute("class", className);
    return "finished";
}

selectBackground("ul", "background");

function selectBackgroundAllElements(selector, className) {
    var elList = document.querySelectorAll(selector);
    elList.forEach(function (element){
        element.setAttribute("class", className)
    });
}

selectBackgroundAllElements("li", "background");

function selectBacgroundAndUppercase (className) {
    var ulLast = document.querySelectorAll("ul");
    var liList = ulLast[ulLast.length-1].querySelectorAll("li");
    liList.forEach(function (element) {
        console.log(element);
        
        element.setAttribute("class", className);
    });
}

selectBacgroundAndUppercase("backgroundUpper");



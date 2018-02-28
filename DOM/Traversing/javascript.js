function transferClass () {
    var liList = document.querySelectorAll("li");
    liList.forEach(function (element){
        if (element.getAttribute("class") === "active"){
            element.removeAttribute("class");
        }
    })
    var ulList = document.querySelectorAll("ul");
    ulList[0].querySelectorAll("li")[0].setAttribute("class", "active");
}

transferClass();
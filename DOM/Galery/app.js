// document.addEventListener("click", function (e){
//     console.log(e.target);
//     imgList.forEach(function (elem){
//         if (e.target === elem){
//             imgList.forEach(function (el){
//                 el.style.border = "none";
//             })
//             e.target.style.border = "solid 1px red";
//             if (elem.width === 300){
//                 e.stopPropagation();
//             }
//         }
//     })
// })

var imgList = document.querySelectorAll("img");
var previousImage = document.querySelector("img");

imgList.forEach(function (imgNode) {
    addEvent(imgNode);
})

document.addEventListener("click", function(e){
    console.log(e.target);
})

function addEvent(node) {
    node.addEventListener("click", function (e) {
        previousImage.style.border = "none";
        this.style.border = "1px solid red";
        if (this.width === 300) {
            e.stopPropagation();
        }
        previousImage = this;
    })
}

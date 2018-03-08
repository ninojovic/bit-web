function searchUsers(url = "") {
    let XHRrequest = new XMLHttpRequest();

    XHRrequest.open("GET", `https://api.github.com/search/users?q=${url}`);
    
    XHRrequest.onload = function () {
        let users = JSON.parse(this.responseText).items;
        for (let i = 0; i < 6; i++){
            let currUser = users[i];
            let img = $(`<img src="${currUser.avatar_url}" alt="${currUser.login}">`);
            let p = $(`<p>${currUser.login}</p>`);
            let card = $(`<card>${img}${p}</card>`);
            console.log(card);
        }
        
    }

    XHRrequest.send();
}

$(function () {
    searchUsers("nino");
})
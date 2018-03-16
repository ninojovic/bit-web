function searchUsers(url = "") {
    const XHRrequest = new XMLHttpRequest();

    XHRrequest.open("GET", `https://api.github.com/search/users?q=${url}`);

    XHRrequest.onload = function () {
        if (XHRrequest.status >= 200 && XHRrequest.status < 400) {
            const users = JSON.parse(this.responseText).items;
            $("main").children().remove();
            for (let i = 0; i < users.length; i++) {
                const currUser = users[i];
                const img = $(`<img src="${currUser.avatar_url}" alt="${currUser.login}">`);
                const p = $(`<p><a href="${currUser.html_url}">${currUser.login}</a></p>`);
                const card = $('<card>');
                card.append(img);
                card.append(p);
                $("main").append(card);
            }
        } else {
            alert("Nothing to search")
        }
    }

    XHRrequest.send();
}

$(function () {
    $(document).on("keydown", function (e) {
        if (e.keyCode === 13) {
            const inputVal = $("#searchUser").val();
            searchUsers(inputVal);
        }
    })
})
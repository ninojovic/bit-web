function getCountry(url="") {
    let XHRrequest = new XMLHttpRequest();

    XHRrequest.open("GET", `http://freegeoip.net/xml/${url}`);

    XHRrequest.send();

    XHRrequest.onload = function () {
        let responseXML = XHRrequest.responseXML;
        let jQueryObj = $(responseXML);
        let country = jQueryObj.find("CountryName").text();
        console.log(country);
    }
}

$(function (){
    getCountry("bgit.rs");
})
var APIkey = "376269d9f7e94faba6b258c8521c87c2";
var imageChecker = function (url) {
    return url ? url : "https://picsum.photos/500/350";
};
var changeSource = function (source) {
    var convertedSource = "";
    if (source.includes("https://www.facebook.com/bbcnews"))
        return convertedSource = "BBC News";
    else if (source.includes("https://www.facebook.com/DailyMailCeleb"))
        return convertedSource = "Daily Mail Celebs";
    else if (source.includes("https://www.facebook.com/DailyMail"))
        return convertedSource = "Daily Mail";
    else {
        return source;
    }
};
var myData = {};
function convertDate(date) {
    var array = [];
    for (var i = 0; i < 10; i++) {
        array.push(date.charAt(i));
    }
    return array.join("");
}
// function revealDescription() {
//     let input = document.getElementById("decriptionContainer");
//         input.style.marginLeft="0vw";
//         input.innerHTML=element.content;
// }
fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=" + APIkey)
    .then(function (res) { return res.json(); })
    .then(function (data) { return data.articles.map(function (element, index) { return (document.getElementsByClassName("container")[0].innerHTML += "<div key = " + index + " class = \"card\">\n    <div id = \"imageContainer\" >\n    <img src = " + imageChecker(element.urlToImage) + " />\n    </div>\n    <a href=\"" + element.url + " target=\"blank\"><h1>" + (element.title ? element.title : "Unable to retrieve data") + "</h1></a>\n    <p id =\"authorWithDate\">\n    Published by " + (element.author ? changeSource(element.author) : "Unknown") + " <br/>\n    " + (element.publishedAt ? convertDate(element.publishedAt) : "") + "\n    </p>\n    <p id = \"description\">" + (element.description ? element.description : "Unable to retrieve data") + "</p>\n    </div>"); }); });
//tracer bullet on input field value, needs to be passed as a filter for article contents 
var allCards = document.querySelectorAll(".card");
console.log(document.getElementsByClassName(".card").length); // returns 0, why?
function getInput(value) {
    console.log(value);
    return value;
}
;
var container = document.getElementsByClassName("container");
console.log(JSON.stringify(container)); //comes out as an empty object, why?
//# sourceMappingURL=main.js.map
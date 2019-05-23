var APIkey = "376269d9f7e94faba6b258c8521c87c2";
var imageChecker = function (url) {
    return url ? url : "https://picsum.photos/500/350";
};
fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=" + APIkey)
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var eachArticle = data.articles.map(function (element, index) { return (document.getElementsByClassName("container")[0].innerHTML += "<div key = " + index + " class = \"card\">\n    <div id = \"imageContainer\" onclick = " + showDescription + ">\n    <img src = " + imageChecker(element.urlToImage) + " />\n    </div>\n    <h1>" + (element.title ? element.title : "Unable to retrieve data") + "</h1>\n    <p id =\"authorWithDate\">\n    Published by " + (element.author ? element.author : "Unknown") + " <br/>\n    " + (element.publishedAt ? element.publishedAt : "") + "\n    </p>\n    <p id = \"description\">" + (element.description ? element.description : "Unable to retrieve data") + "</p>\n    </div>"); });
});
//tracer bullet on input field value, needs to be passed as a filter for article contents 
var showDescription = function () {
    document.getElementById("description").classList.toggle("toggleDisplay");
};
function getInput(value) {
    console.log(value);
    return value;
}
;
var container = document.getElementsByClassName("container");
console.log(JSON.stringify(container)); //comes out as an empty object, why?
//# sourceMappingURL=main.js.map
var APIkey = "376269d9f7e94faba6b258c8521c87c2";
fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=" + APIkey)
    .then(function (res) { return res.json(); })
    .then(function (data) { return data.articles.map(function (element, index) { return (document.getElementsByClassName("container")[0].innerHTML += "<div key = " + index + " class = \"card\">\n    <div id = \"imageContainer\">\n    <img src = " + element.urlToImage + " />\n    </div>\n    <h1>" + element.title + "</h1>\n    <p id =\"authorWithDate\">\n    Published by " + element.author + " <br/>\n    " + element.publishedAt + "\n    </p>\n    <p id = \"description\">" + element.description + "</p>\n    </div>"); }); });
function getInput(value) {
    console.log(value);
    return value;
}
var field = document.getElementById("SearchBar");
//# sourceMappingURL=main.js.map
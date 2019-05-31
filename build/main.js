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
var openDescription = function () {
    event.target.addEventListener("click", function () {
        document.getElementById("descriptionContainer").style.marginLeft = "0vw";
    });
};
// function revealDescription() {
//     let input = document.getElementById("decriptionContainer");
//         input.style.marginLeft="0vw";
//         input.innerHTML=element.content;
// }
var myOutput = [];
fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=" + APIkey)
    .then(function (res) { return res.json(); })
    .then(function (data) { return data.articles.map(function (element, index) { return (document.querySelector(".container").innerHTML += "<div key = " + index + " class = \"card\">\n    <div id = \"imageContainer\" onclick=\"" + openDescription + "\">\n    <img src = " + imageChecker(element.urlToImage) + " />\n    </div>\n    <a href=\"" + element.url + " target=\"blank\"><h1>" + (element.title ? element.title : "Unable to retrieve data") + "</h1></a>\n    <p id =\"authorWithDate\">\n    " + (element.publishedAt ? convertDate(element.publishedAt) : "") + "\n    <br/>\n    <span id=\"readMore\">Read more...</span>\n    </p>\n    <div class=\"description\">\n    " + element.description + "\n    </div>\n    </div>"); }); });
//tracer bullet on input field value, needs to be passed as a filter for article contents 
// biggerDescription.addEventListener("click", function() {
//     console.log(biggerDescription);
// })
// function getInput(value) {
//     console.log(value);
//     return value;
// };
var mydesc = document.getElementsByClassName(".description");
console.log(mydesc);
//tasks left to do:
// 1.) reveal description on click
// 2.) descriptionContainer needs to contain corresponding description etc.
// 
//# sourceMappingURL=main.js.map
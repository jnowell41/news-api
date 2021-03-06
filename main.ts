var APIkey:string = "376269d9f7e94faba6b258c8521c87c2";

interface IItems {
    status:string;
    totalResults:number;
    articles:IArticles[];
}

interface IArticles {
    source:ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    }

interface ISource {
    id: string;
    name: string;
}

const imageChecker = (url) => {
    return url ? url : "https://picsum.photos/500/350"
};

const changeSource = (source) => {
    let convertedSource = "";
    if (source.includes("https://www.facebook.com/bbcnews")) 
     return convertedSource = "BBC News";
    else if(source.includes("https://www.facebook.com/DailyMailCeleb"))
    return convertedSource = "Daily Mail Celebs";
    else if(source.includes("https://www.facebook.com/DailyMail"))
    return convertedSource = "Daily Mail"
     else {
         return source;
     }
}

let myData = {};

function convertDate(date) {
    let array = [];
    for (let i=0;i<10;i++) {
        array.push(date.charAt(i))
    }
        return array.join("");
}

const openDescription = () => {
    event.target.addEventListener("click",function() {
        document.getElementById("descriptionContainer").style.marginLeft="0vw";
    })
}

// function revealDescription() {
//     let input = document.getElementById("decriptionContainer");
//         input.style.marginLeft="0vw";
//         input.innerHTML=element.content;
// }
let myOutput = [];

fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey="+APIkey)
.then(res => res.json())
.then(data => data.articles.map((element, index) => ( 
    document.querySelector(".container").innerHTML += `<div key = ${index} class = "card">
    <div id = "imageContainer" onclick="${openDescription}">
    <img src = ${imageChecker(element.urlToImage)} />
    </div>
    <a href="${element.url} target="blank"><h1>${element.title ? element.title : "Unable to retrieve data"}</h1></a>
    <p id ="authorWithDate">
    ${element.publishedAt ? convertDate(element.publishedAt) : ""}
    <br/>
    <span id="readMore">Read more...</span>
    </p>
    <div class="description">
    ${element.description}
    </div>
    </div>`
)));
//tracer bullet on input field value, needs to be passed as a filter for article contents 

// biggerDescription.addEventListener("click", function() {
//     console.log(biggerDescription);
// })

// function getInput(value) {
//     console.log(value);
//     return value;
// };

let mydesc = document.getElementsByClassName(".description");
console.log(mydesc);


//tasks left to do:
// 1.) reveal description on click
// 2.) descriptionContainer needs to contain corresponding description etc.
// 
var APIkey:string = "376269d9f7e94faba6b258c8521c87c2";

interface ISource {
    id: string;
    name: string;
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

interface IItems {
    status:string;
    totalResults:number;
    articles:IArticles[];
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
        array.push(date.charAt(i)
    }
        return array.join("");
}

// function revealDescription() {
//     let input = document.getElementById("decriptionContainer");
//         input.style.marginLeft="0vw";
//         input.innerHTML=element.content;
// }

fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey="+APIkey)
.then(res => res.json())
.then(data => data.articles.map((element, index) => ( 
    document.getElementsByClassName("container")[0].innerHTML += `<div key = ${index} class = "card">
    <div id = "imageContainer" >
    <img src = ${imageChecker(element.urlToImage)} />
    </div>
    <a href="${element.url} target="blank"><h1>${element.title ? element.title : "Unable to retrieve data"}</h1></a>
    <p id ="authorWithDate">
    Published by ${element.author ? changeSource(element.author) : "Unknown"} <br/>
    ${element.publishedAt ? convertDate(element.publishedAt) : ""}
    </p>
    <p id = "description">${element.description ? element.description : "Unable to retrieve data"}</p>
    </div>`
)));

//tracer bullet on input field value, needs to be passed as a filter for article contents 

let allCards = document.querySelectorAll(".card");

console.log(document.getElementsByClassName(".card").length) // returns 0, why?

function getInput(value) {
    console.log(value);
    return value;
};


var container = document.getElementsByClassName("container");
console.log(JSON.stringify(container)); //comes out as an empty object, why?
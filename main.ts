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

const changeBbcSource = (source) => {
    let convertedSource = "";
    if (source.includes("https://www.facebook.com/bbcnews")) 
     return convertedSource = "BBC News";
    else if(source.includes("https://www.facebook.com/DailyMailCeleb"))
    return convertedSource = "Daily Mail";
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

fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey="+APIkey)
.then(res => res.json())
.then(data => {let eachArticle =  data.articles.map((element, index) => ( 
    document.getElementsByClassName("container")[0].innerHTML += `<div key = ${index} class = "card">
    <div id = "imageContainer" >
    <img src = ${imageChecker(element.urlToImage)} />
    </div>
    <h1>${element.title ? element.title : "Unable to retrieve data"}</h1>
    <p id ="authorWithDate">
    Published by ${element.author ? changeBbcSource(element.author) : "Unknown"} <br/>
    ${element.publishedAt ? convertDate(element.publishedAt) : ""}
    </p>
    <p id = "description">${element.description ? element.description : "Unable to retrieve data"}</p>
    </div>`
))});
console.log(myData);

//tracer bullet on input field value, needs to be passed as a filter for article contents 

let allCards = document.querySelectorAll(".card");

console.log(document.getElementsByClassName(".card").length) // returns 0, why?

function getInput(value) {
    console.log(value);
    return value;
};

// function filterData(input) {
//     if (input===JSON.stringify(allCards).charAt(input) {
//         document.getElementsByClassName("container")[0].innerHTML += `<div key = ${index} class = "card">
//         <div id = "imageContainer" >
//         <img src = ${imageChecker(this.element.urlToImage)} />
//         </div>
//         <h1>${this.element.title ? this.element.title : "Unable to retrieve data"}</h1>
//         <p id ="authorWithDate">
//         Published by ${this.element.author ? this.element.author : "Unknown"} <br/>
//         ${this.element.publishedAt ? this.element.publishedAt : ""}
//         </p>
//         <p id = "description">${this.element.description ? this.element.description : "Unable to retrieve data"}</p>
//         </div>`
//     }
}


var container = document.getElementsByClassName("container");
console.log(JSON.stringify(container)); //comes out as an empty object, why?

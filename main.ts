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

fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey="+APIkey)
.then(res => res.json())
.then(data => {let eachArticle =  data.articles.map((element, index) => (
    document.getElementsByClassName("container")[0].innerHTML += `<div key = ${index} class = "card">
    <div id = "imageContainer" onclick = ${showDescription}>
    <img src = ${imageChecker(element.urlToImage)} />
    </div>
    <h1>${element.title ? element.title : "Unable to retrieve data"}</h1>
    <p id ="authorWithDate">
    Published by ${element.author ? element.author : "Unknown"} <br/>
    ${element.publishedAt ? element.publishedAt : ""}
    </p>
    <p id = "description">${element.description ? element.description : "Unable to retrieve data"}</p>
    </div>`
))});

//tracer bullet on input field value, needs to be passed as a filter for article contents 

const showDescription = () => {
    document.getElementById("description").classList.toggle("toggleDisplay");
}

function getInput(value) {
    console.log(value);
    return value;
};


var container = document.getElementsByClassName("container");
console.log(JSON.stringify(container)); //comes out as an empty object, why?
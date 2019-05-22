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

fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey="+APIkey)
.then(res => res.json())
.then(data => data.articles.map((element, index) => (
    document.getElementsByClassName("container")[0].innerHTML += `<div key = ${index} class = "card">
    <div id = "imageContainer">
    <img src = ${element.urlToImage} />
    </div>
    <h1>${element.title}</h1>
    <p id ="authorWithDate">
    Published by ${element.author} <br/>
    ${element.publishedAt}
    </p>
    <p id = "description">${element.description}</p>
    </div>`
)));

function getInput(value) {
    console.log(value);
    return value;
}

var field:HTMLElement = document.getElementById("SearchBar");
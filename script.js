const getQuoteBtn = document.querySelector("#getQuoteBtn");
const displayQuote = document.querySelector("#displayQuote");
const displayAuthor = document.querySelector("#displayAuthor");
const quotesApi = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(quotesApi).then((data) => data.json()).then((item) => {
        console.log(item.content);
        console.log(item.author);
        displayQuote.innerHTML = item.content;
        displayAuthor.innerHTML = item.author;
    })
}

getQuoteBtn.addEventListener("click", getQuote);

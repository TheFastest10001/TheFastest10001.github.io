const getQuoteBtn = document.querySelector("#getQuoteBtn");
const displayQuote = document.querySelector("#displayQuote")
const quotesApi = "https://api.quotable.io/random";
// const express = require("express");
// const cors = require("cors");

// const corsOptions = {
//   origin: "http://127.0.0.1:5173",
// };

// const app = express();
// app.use(cors(corsOptions));

let getQuote = () => {
    fetch(quotesApi).then((data) => data.json()).then((item) => {
        console.log(item.content);
        console.log(item.author);
        displayQuote.innerHTML = item.content;
    })
}

getQuoteBtn.addEventListener("click", getQuote);
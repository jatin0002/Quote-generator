const API_URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const newButton = document.querySelector(".btn");
const quoteText = document.querySelector(".quote__text span");
const authorName = document.querySelector(".quote__author span");

async function fetchAPI() {
  let response = await fetch(API_URL);
  let data = await response.json();

  newButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 102);
    let quoteArray = data.quotes[randomNumber];

    const { quote, author } = quoteArray;

    quoteText.textContent = quote;
    authorName.textContent = author;
  });
}

fetchAPI();

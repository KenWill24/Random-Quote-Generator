/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [

  {quote: 'The only way to do great work is to love what you do.',
  source: 'Steve Jobs', 
  year: 2005},
  {quote: 'Do not stop beleivin.', 
  source: 'Journey', 
  cite: 'song'},
  {quote: 'Everything you have ever wanted is on the other side of fear.', 
  source: 'George Addair'},
  {quote: 'It does not matter how slowly you go as long as you do not stop.', 
  source: 'Confucius'},
  {quote: 'Opportunities does not happen. You create them.',
  source: 'Chris Grosser'}

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes) {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const index = quotes[randomNumber];
  return index;
};


/***
 * `printQuote` function
***/

function printQuote() {

const randomQuote = getRandomQuote(quotes);

let html = ` <p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source} `

if (randomQuote.cite) {

  html += `<span class="cite">${randomQuote.cite}</span>`

}

if (randomQuote.year) {

  html += `<span class="year">${randomQuote.year}</span>`

}

html += "</p>"

document.getElementById('quote-box').innerHTML = html;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
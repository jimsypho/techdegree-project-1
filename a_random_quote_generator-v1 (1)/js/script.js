/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
  Quotes array of objects
***/
var quotes = [
  {
    quote : "People don't buy until you move them emotionally.  Think of all of the times people didn't buy into what you had to offer even though it was the logical thing to do.",
    source : "Steve Brown",
    year: 2019
  },
  {
    quote : "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    source : "Bruce Lee",
    citation: "brainyquote.com"
  },
  {
    quote : "Mistakes are always forgivable, if one has the courage to admit them.",
    source : "Bruce Lee"
  },
  {
    quote : "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
    source : "Bruce Lee"
  },
  {
    quote : "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
    source : "Margaret Mead",
    tags : 'motivation, leadership'
  }
]


/***
 * Create getRandomQuote function that is based on the number of quote objects in the array
***/

function getRandomQuote (randomNum) {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNum];
  //console.log(randomQuote);
  return randomQuote;
}
getRandomQuote();
/***
 * Create `printQuote` function that gets the random quote and concatenates it with other properties to for the HTML that needs to be printed to the document
***/

function printQuote () {
  var newQuote = getRandomQuote();
  var html = '<p class="quote">' + newQuote.quote + '</p>';
  html += '<p class="source">' + newQuote.source;
  
  if (newQuote.citation) {
    html += '<span class="citation">' + newQuote.citation + '</span>';
  }
  if (newQuote.year) {
    html += '<span class="year">' + newQuote.year + '</span>';
  }
  if (newQuote.tags) {
    html += '<span class="citation">' + newQuote.tags + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  randomBackground();
}

/* Create a random background color function that gets called every time a new quote is printed to the document */

function randomBackground (num1, num2, num3) {
  num1 = Math.ceil(Math.random () * 255);
  num2 = Math.ceil(Math.random () * 255);
  num3 = Math.ceil(Math.random () * 255);
  var bgColor = 'rgb' + '(' + num1 + ', ' + num2 + ', ' + num3 + ')';
  document.body.style.backgroundColor = bgColor;
}

/* Create timing function */

function backgroundTimer () {
  setInterval(printQuote, 8000);
}
backgroundTimer();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

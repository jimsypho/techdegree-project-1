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
    source : "Margaret Mead"
  }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote (randomNum) {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNum];
  console.log(randomQuote);
}
getRandomQuote();
/***
 * `printQuote` function
***/

function printQuote () {
  

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

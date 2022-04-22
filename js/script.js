/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes`array 
 * randomly selected quotes off the internet with citation information (if applicable)
***/
let quotes = [
    {quote: 'The journey of a thousand miles begins with one step', source: 'Lao Tzu', citation: 'Chinese proverb' },
    {quote: 'Life is what happens when you\'re busy making other plans', source: 'John Lennon', citation: 'Song: Beautiful Boy', year: 1980 },
    {quote: 'Get busy living or get busy dying...there ain\'t nothing in between', source: 'Stephen King', citation: 'Different Seasons', year: 1982 },
    {quote: 'Life is like a box of chocolates. You never know what you\'re going to get', source: 'Forrest Gump', citation: 'Movie: Forrest Gump', year: 1994 },
    {quote: 'In three words, I can sum up everything I\'ve learned about life: it goes on', source: 'Robert Frost', citation: 'This Week Magazine', year: 1954 }
  ]


/***
 * `getRandomQuote`function
 * grab the random quote that will display after the button is clicked
***/

function getRandomQuote() {
    // create a random number to use as the quote index to find
    let randomNum = Math.floor(Math.random() * quotes.length);
    // return the quote based at the random index
    for (let i = 0; i < quotes.length; i++) {
        for (quote in quotes) {
            return quotes[randomNum];
        }
    }
}

/***
 * `printQuote`function 
 * display the randomized quote on the page 
***/

function printQuote() {
    // quote to display
    let randomQuote = getRandomQuote();
    // how the quote information will look on the screen
    let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    `;
    if (randomQuote.citation) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }

    html += `<p>`;
    // display full quote with source, citation, year (if applicable) to the screen
    return document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*** 
 EXTRA CREDIT
 * change the background color on button click
***/
// colors to pick from
const colors = ['#8fdde3', '#c96ae6', '#faf069', '#fc853f', '#fa5f83']
// get button to attach to even listener
const btn = document.getElementById('load-quote');
// add event listener function to change background
btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

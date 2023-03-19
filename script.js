const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//  Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//  Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
    //  Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// Check if author field is blank and replace with UNKNOWN
if (!quote.author){
    authorText.textContent = 'Unknown';
} else {
    authorText.textContent = quote.author;
}
//  Check Quote length to determine the styling
if (quote.text.length > 120){
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
    // SET the Quote, HIDE the Loader
    quoteText.textContent = quote.text;
    complete();
    console.log(quote.text,quote.author)
}

// Get Quotes from API
async function getQuotes(){
    loading();
    const apiUrl =  'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        alert(error)
        // Catch Error Here 
    }
}

// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Facebook Share
function facebookShare(){
    const facebookUrl = `https://www.facebook.com/dialog/share?text=${quoteText.textContent} - ${authorText.textContent}&app_id=161819940122517&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer`;
    window.open(facebookUrl, '_blank');
}

//  Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
facebookBtn.addEventListener('click', facebookShare);


// On Load
getQuotes();

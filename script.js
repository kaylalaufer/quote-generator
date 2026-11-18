// https://jacintodesign.github.io/quotes-api/data/quotes.json

let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        // will not populate until we have some data fetched from api
        // would not work without async because it would be undefined
        
        apiQuotes = await response.json();
        // get json from api
        // turn response into json object
        // pass into global variable

        newQuote();
    } catch (error) {
        alert(error);
        // Catch error here: UI or alert
    }
}

// On Load
getQuotes();
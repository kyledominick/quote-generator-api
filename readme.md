# Background Generator
https://heropatterns.com/

# Google Fonts
https://fonts.google.com/

# Twitter
https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent

# Facebook
https://developers.facebook.com/

# Open Graph Meta Tags
https://ahrefs.com/blog/open-graph-meta-tags/

# git 
https://github.com/new
Create Repository
Remove .git folder from folder structure if present 
terminal:
git init
git add origin "git@github.com:kyledominick/quote-generator-api.git" HTTPS or SSH
git add .
git commit -m 'commit'
git push origin main 

# Update to API
The next video will use an API that may no longer work depending on when you are watching the video, specifically: https://type.fit/api/quotes

I have instead created my own version of a Quotes API that contains over 8,000 quotes! It is hosted on GitHub and will be hosted in my own repository to avoid any issues in the future. You can find it here:

https://jacintodesign.github.io/quotes-api/data/quotes.json

You will only need to change part of one line of the code from what you will see in the video, and that is your apiUrl variable. Below is the old code:

// Get Quotes From API
async function getQuotes() {
  ...
  const apiUrl = 'https://type.fit/api/quotes';
  try {
  ...
Which will be replaced with this:

// Get Quotes From API
async function getQuotes() {
  ...
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
  ...

Lastly, I have updated the quotes-generator project on my GitHub and have updated the final zip file of the project to include the correct API. Enjoy :)
# Sample Requests
https://zenquotes.io/api/quotes - Generate a JSON array of 50 random quotes on each request

https://zenquotes.io/api/today - Generate the quote of the day on each request

https://zenquotes.io/api/random - Generate a random quote on each request
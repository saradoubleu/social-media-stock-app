/*
Background
- you’ve noticed a correlation between the various social media posts on a stock symbol and that share price for that stock symbol.
- You’ve decided to build an app that can provide a buy, hold or sell recommendation when given a stock symbol. The recommendation adjusts itself based on data.
- While you look at building your backend, you’ve decided to start working on the frontend today.



Technical Requirements
- create and use your own mock data. 
    - Use the Math.random function to generate mock values for a given stock price and the count of social media posts that your backend service will provide, as well the recommendation for buying, holding (doing nothing) and selling the stock. Be sure to keep your code maintained in such a way that you can later replace it with a backend API. 
- create functions 
    - “stockPriceGenerator” (that takes the stock symbol and dates as parameters), 
    - “socialMediaCountGenerator” (that takes the stock symbol and social media type e.g. Twitter)  
    - “recommendationAlgorithm” (that takes the stock prices and social media counts)
- create tests
 

Feature Requirements
- It would be simply amazing if you could swap out algorithms that recommend a buy/hold/sell rating on the fly
• You understand that some algorithms might require more information (like constants or risk ratios) and other information in order to generate this. It would be great if you could account for this.


Visual Requirements
- use CSS/SASS/LESS. 
- do anything to speed up the initial load times.
- There needs to be separate sections showing:
    - user input for stock symbol, 
    - a time window that is defaulted to 10 days (including today)
    - a count of social media posts and the stock price over 10 days,
    - recommendations for when to buy, hold (do nothing), or sell in those 10 days

 Header  ->  Form for Stock Symbol, Social Media Info, and Time Window --> Table for given Stock Symbol showing price at the end of the day and buy/sell/hold rating



 Optional Challenges

- A11y - visually impaired considerations
- Assume your backend teams tell you they can provide the top 2 social media posts as well. Display them on the app at the bottom.
- Allow your users to request more than the top 2 social media posts.
- Allow your users to request top “x” number of social media post from every social media service you have integrated.
- Allow your users to add / remove any social media service from the system (recommendation and displays) on the fly.
- Build a graph (feel free to use a library to help with this part) indicating the points where your algorithm will change the buy/hold/sell recommendation.
*/

/* 

ASSMPTIONS
- FrontEnd Project ONLY based on - ...start working on the frontend today


*/

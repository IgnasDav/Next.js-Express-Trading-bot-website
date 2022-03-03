#######PLAN#######

1. Create a dummy bot which sends info by web sockets to front
   1.1 Create a bot which sends text
   1.2 Implement web sockets to back-end
   1.3 Test the bot through console.logging messages that bot sends
2. Create a basic layout of UI
   2.1 Draw the design on a paper or use a designated tooling(Figma, adobeXD)
   2.1.1 Watch a tutorial about designing with figma and design your own page
   2.2 Implement the layout
   2.3 Connect front end with back end to see the bot messages
   2.4 Migrate app from create-react-app to next.js
   2.5 Implement back-end to render coin prices
3. Create Login/register back end functionality
   3.1 Add middleware to back end for authentification
   3.2 Use and implement JWT for auth token
   3.3 Use BCrypt to encrypt user passwords
   3.4 Connect back end to mongoDB for data storage
   3.5 Test everything through Postman
4. Implement Login/Register to Front
   4.1 Add registration form to Front
   4.1.1 Connect to back end to send results and create user
   4.2 When user is created, a message should appear in UI
   4.3 When user logins, replace login route with useLocation
   4.4 When user is logged in, show him some content that unregistered user cannot see
5. Start implementing bots
   5.1 Check if there are any npm packages which could make my life easier
   5.1 Read documentation about npm packages || Read documentation about writing bots in node.js
   5.3 Write a bot with gathered information
   5.4 Do tests to check if the bot is working correctly
6. Connect bots to UI
   6.1 Connect bot to front end
   6.2 Show something to the screen if bot is successfuly connected
   6.3 Create UI that would show the bots transactions
7. Implement coin view
   7.1 Make UI that shows coins data
   7.2 Clicking on coin takes us to a sub-route
   7.3 Subroute shows charts about the coins data
   7.4 Page shows button, when clicked, takes us to a bot transaction page, which will trade the selected coin
8. Add a selection of bots
   8.1 through gathered data implement a few bots
   8.2 Bots can be selected through a sub-route
   8.3 Bot page shows profit/loss that the bot made
9. Fully Implement the UI
   9.1 Home screen which shows trading examples
   9.1 Bot pages which show all the bots
   9.2 Single bot page which showws profits/margins that the bot has done
   9.3 Coin page hich shows coin charts and data
   9.4 Single coin page which shows single coin charts
   9.5 Login/Register pages  
   //////////TECHNOLOGIES/////////////////////
10. React
11. Redux
12. React-router-dom
13. Styled components/Tailwind css
14. Node.js
15. Express
16. BCrypt
17. JOI
18. JWT
19. MongoDB
20. ENV
21. CORS
22. TypeScript
    !!!!!!!!!BONUS!!!!!!!!
23. Make mobile version with React-native
24. Deploy the app with AWS or other cloud platform
25. Write tests for the app

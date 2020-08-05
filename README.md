# budget-buddy

## Project Description:

Budget Buddy helps users gain a greater control of their financial life, by providing the ability to analyze and visual their historical data, combined with the power to set financial goals and receive feedback about how they are doing in regards to accomplishing said goals.

## Project Task Requirements:

<ins> 3-5 minimal requirements </ins>

- Users add and delete income + expense items (name + amount) with a datestamp - yes
- Saves “names” used and income sources - did not align with project goals
- Feedback → most spent, least spent, surplus/deficit - yes
- Persistence of data → login on start - yes

<ins> 3-7 "standard" requirements</ins>

- Users can categorize income + expense items → feedback reflects categorization - yes
- Visualization → graphing of expenses/income - yes
- Visualization → by category - yes
- Financial goals (% of income, target amount, years) → input 2 → output 3rd - yes
- Timeboxed data → ability to compare data - yes

<ins> 2-3 stretch requirements</ins>

- Personalized goals dependent on category → limits (no)
- Bank statement parsing (no)
- Excel population - yes

## Project integration with course concepts:

<ins>HTML, CSS, JS</ins>

For the styling of our application, we chose to leverage the Material UI library to ensure greater consistency amongst our different components. However, we still used CSS in a handful of places for very specific styling. The use of JavaScript and HTML were realized in the utilization of React.

<ins>React & Redux</ins>

Our project is created based on React and Redux and the standard structure composed of actions, reducer, and stores. We utilize various methods of the React lifecycle such as componentDidUpdate in ensuring all action calls are appropriately dispatched. We use redux-thunk to handle axios calls made to the backend to seamlessly integrate with our Redux structure. 

<ins>MongoDB</ins>

Two different collections were used. MongoDB is leveraged in our application to store each user’s data to ensure that there is persistence, enabling optimal user experience. We leveraged the NoSQL format by maintaining two different collections, one for all transactions for all users, and the latter to store all existing users, such that the transactions for each user were much more easily queried.

<ins>Node & Express</ins>

Our backend app is created via Express and received axios HTTP requests from the frontend to handle the database connections. We have configured the routes and the basic CRUD calls in interacting with the data from the backend. Our API is RESTful. 

<ins>Release Engineering</ins>

We deployed our app on Heroku and all our code is contained within one Github repo for minimal dependencies. We do have library imports mainly the Material UI library for our frontend that needs to be managed in the future if there are updates. We have to custom build or app for Heroku deployment when making a significant change to ensure whatever we push to the endpoint is tested and robust.

## Above and beyond functionality:

We made a design decision early on to use Material UI in our components in order to maintain a professional and consistent theme across our app. This library also allowed us to maintain cleaner code as much of the styling was abstracted away for us. Other libraries used included MomentJS for our date stamps used for filtering, and Recharts for our data visualization “Overview” page. Using these libraries took the guesswork out of data manipulation and allowed us to focus on functionality. Lastly, we took full advantage of Google OAuth for user authentication and login. Using Google’s API ensured that sensitive user information would not need to be stored in our own database, bypassing a potential security risk. Our final touch to our app was the introduction of the Excel xlsx library, allowing users to upload Excel files and auto-populating their transaction database.


## Next steps:

As all of our minimal and standard goals have been met, the next iterations of this project would be focused on the two stretch goals that are incomplete: bank statement parsing and personalized goals pertaining to categories. Bank statement parsing is a feature that would be integrated with AR technology or Google Vision API to parse information from bank statements in JPG and PDF format into transaction entries on the app. Another step would be to enable more customizability in goal setting - allowing custom goals by month, year and for different categories and have that reflect in the data visualization on the overview tab.


## Contributors:

Anne - I completed the excel feature of our app, whereby users can download a template and use said template to mass upload transactions. I also worked on the add entry component alongside creating all the front-end support for the categorization feature for entries.

Elaine - I worked on the data visualization portion of our app. In this role I had to take the transactions from the database and then split them into their respective states and reducers and manipulate them in order to display different views and comparisons of user data.

Sylvester - I worked on the routing for the app, the login page/functionality with Google Oauth, user state management with Redux, and localizing all backend requests to specific users. I also created various users endpoints for storing user information and to support custom categorization.

Ansel - Helped create code structure for Redux integration as I had previous industry experience (actions, reducer, store structures). I also mainly worked on the transactions list and the deletion request. Filtering mechanism for different types of transactions. 


## Deployed URL:

https://budgetbuddy4.herokuapp.com/
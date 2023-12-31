# CountryExplorer - React & Node.js 


<br>
<br>

<img src="frontend/country-find/src/assets/images/main.png" alt="drawing" width="50%"/>



<br>

## Description

<br>

I created this [web application](https://countryexplore-93cb737548b8.herokuapp.com) to allow users to input a country's name, fetch information about that country from the REST Countries API, and display it to the user. This project consists of both a React frontend and a Node.js backend running Express.

----

## Table of Contents

- [Description](#description)
- [How to use](#how-to-use)
- [Testing](#testing)
  - [Cyrpess](#cyrpess)
    - [Cypress Component testing](#cypress-component-testing)
    - [Cypres EtE test](#cypres-ete-test)
  - [Postman Testing](#postman-testing)
- [Error Handling](#error-handling)
  - [API Fetch Error Handling](#api-fetch-error-handling)
  - [General Error Handling](#general-error-handling)
- [Deployment](#deployment)
- [Credits](#credits)




## How to use

<br>

1. Open your preferred web browser.
Navigate to the application's URL: https://countryexplore-93cb737548b8.herokuapp.com/country

2. Once on the main page, locate and click on the link or button leading to the 'Country Form' page.
On the 'Country Form' page, you'll see a search bar or input box.


3. Click on the input box.

4. Type in the name of a country you're interested in. Please ensure that the spelling is correct, and use the full name of country (e.g., "United Kingdom", "South Africa").

5. Press Enter or click on the search button/icon adjacent to the input box.


6. After submitting the country's name, the application will fetch and displayinformation about the chosen country. This includes the country's capital, flag,  population and other relevant details.


7. If you wish to search for another country, simply return to the search bar, clear the previous entry, and input a new country's name.



---



<br>





## Testing


<br>

### Cypress

<br>

#### Cypress Component testing

<br>

<img src="frontend/country-find/src/assets/images/cy-c.png" alt="drawing" width="50%"/>

<br>



1. Empty Country Data Test:

Purpose: Ensure that when no country data is provided, the component displays the message "No countries to display yet."
Method: The component is mounted with an empty array for countryData.
Expectation: The displayed message should be "No countries to display yet."

2. Render Country Data Test:

Purpose: Verify that the component correctly renders country details when provided with valid data.
Method: The component is mounted with mock data for a single country (USA in this instance).
Expectation: The component should:
Display the country's official name.
Show the country's flag image.
Render the region, capital, population, and area information in separate list items.

<br>

### Cypres EtE test

<br>


<img src="frontend/country-find/src/assets/images/cy-ec.png" alt="drawing" width="50%"/>

<br>

1. Country Input and Display Test:

Purpose: Verify that a user can successfully input a country's name and subsequently view its details on the webpage.
Steps:
- Navigate to the localhost application at port 3000.
- Click on a link or button (presumably leading to a form or input page) using the data attribute data-cy="linked".
- Input the name "ireland" into the input field labeled data-cy="input".
- Click the submit button with the data attribute data-cy="submit".

Expectation: After submitting, the webpage should display the country name "Republic of Ireland" under an element with the data attribute data-cy="country-name".

2. Invalid Country Input Test

Purpose: Ensure that an error message is displayed when a user inputs an invalid or non-existent country name.
Steps:
- Navigate to the localhost application at port 3000.
- Click on a link or button using the data attribute data-cy="linked".
- Input the name "fakecountry"

<br>

<img src="frontend/country-find/src/assets/images/cy-e.png" alt="drawing" width="50%"/>

<br>
<br>

### Postman Testing

<br>

<img src="frontend/country-find/src/assets/images/test200.png" alt="drawing" width="40%"/>

<br>

<img src="frontend/country-find/src/assets/images/test404.png" alt="drawing" width="40%"/>

<br>

<img src="frontend/country-find/src/assets/images/collection.png" alt="drawing" width="40%"/>

<br>


I used Postman to test the backend of my application.
I ran a Postman collections which tested multiple requests with both invalid an valid country names. I checked that the response showed the correct status codes.




----

<br>


<br>


## Error Handling

<br>

### API Fetch Error Handling

<br>

When the server attempts to fetch country data from the restcountries.com API, there are two main scenarios it checks for:

a. Country Not Found:
- If the fetch request to the API does not succeed (for instance, if the country name isn't recognized by the API), the server will respond with the status code that the API returned. Along with this, it sends a JSON message to the client saying { error: "Country not found" }.

b. Successful Fetch:
- If the fetch request is successful, the server will respond with the country data received from the API. It also logs this data to the console.

<br>

### General Error Handling:

<br>

If any other unexpected error occurs during the process (like network issues, parsing issues, etc.), the server will:

a. Log the error to the console with a message of what went wrong.

b. Send a response to the client with a 500 status along with the status code, it sends a JSON message { error: "Internal server error" }.


----

<br>

<br>

## Deployment


<br>

1. Create two directories named Backend and Frontend.

2.  In client run command > npx create-react-app app to create a react application

3. In Backend run > npm install -g express for the epress server

4. In client, run >npm run build. This will generate a production build version of the project that is optimized for a production deployment

5. Copy the entire build directory in Client and paste into the backend directory.

6. Include the following in the Backend index.js file:


```
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

```

7. Add /node_module to gitignore

8. Install Heroku cli. Login into account in terminal

9. Run

```
 > heroku create app 
 > git init 
 > git add . 
 > git commit -m "inital commit"
 > git:remote -a "app name"
 > git push heroku master


```
10. This will successfully deploy the app to Heroku.

----

<br>

<br>

## Credits 


- https://restcountries.com/
     

<br>


----
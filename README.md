# WeatherApp
WeatherApp
WeatherApp is a web application that allows users to check the weather information for any city. By entering the name of a city, users can retrieve real-time weather data such as temperature, humidity, and weather descriptions. The application fetches data from the OpenWeatherMap API.

Features
Real-Time Weather: Users can check the current weather for any city by entering its name.
Temperature and Humidity: Displays the temperature (°C) and humidity (%) along with the weather conditions.
Weather Description and Emoji: Displays a description of the weather and a corresponding emoji (e.g., rain, sunny) based on the conditions.
User-Friendly Interface: Simple and modern design for an easy user experience.
Technologies Used
HTML5: Structuring the web page.
CSS3: Styling the webpage and providing the layout.
JavaScript: Fetching dynamic data and handling user interactions.
OpenWeatherMap API: Used to retrieve real-time weather data.
How to Use
Clone or Fork the Project:

To clone the project to your local machine:
bash
Kodu kopyala
git clone https://github.com/ErYusufNet/WeatherApp.git
Get an API Key:

Go to the OpenWeatherMap website and create an account to get an API key (the free plan is sufficient).
Update the apiKey variable in the index.js file with your own API key.
Run the Project:

Open the project in a web browser.
Enter the city name and click on the "Get Weather" button.
View the current weather information, temperature, and humidity.
Contributing
This project is open-source and contributions are welcome! If you'd like to improve the project or fix bugs, follow these steps:

Fork this repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Added feature').
Push your changes (git push origin feature-branch).
Create a pull request.

Here is the detailed explanation of the JavaScript, CSS, and HTML code in English:

JavaScript Code Explanations:
weatherForm.addEventListener("submit", async event => { ... }):

Explanation: When the form is submitted, it triggers a function to fetch weather information using the city name entered by the user.
What it does: Prevents the default form submission, grabs the city name from the input, and makes an API request.
getWeatherData(city):

Explanation: Sends a request to the OpenWeatherMap API with the city name and retrieves the weather data in response.
What it does: Sends a request to the API, receives the data, and handles any potential errors.
displayWeatherInfo(data):

Explanation: Takes the data from the API and creates HTML elements to display the weather information on the page.
What it does: Displays the city name, temperature, humidity, weather description, and weather emoji on the card.
getWeatherEmoji(weatherId):

Explanation: Returns an appropriate emoji based on the weather condition ID.
What it does: Determines the emoji (e.g., 🌧 for rain, ☀ for sunny) based on the weather ID provided by the API.
displayError(message):

Explanation: Displays an error message on the screen if an issue occurs.
What it does: Shows an error message, such as "Please enter a city" or an API error like "Could not fetch weather data."
CSS Code Explanations:
body:

Defines the overall layout of the page. It uses flex to align all content vertically and centers the content horizontally using align-items: center. The background color is set to a light gray (hsl(0, 0%, 95%)).
.weatherForm:

Adds a 20px margin around the weather form. This helps provide space around the form elements for better visual separation.
.cityInput:

Defines the styling for the city input field. The border-radius is set to 10px to create rounded corners. Font size and weight are used to adjust the text's size and thickness. The width is set to 300px to make the input field consistent in size.
button[type="submit"]:

Styles the submit button. The background color is set to a green tone, and border-radius creates rounded corners for the button. The cursor: pointer property changes the mouse pointer when hovering over the button, indicating that it’s clickable.
.card:

Styles the card that will display the weather information. A linear-gradient is used for a smooth transition between two colors for the background. box-shadow creates a subtle shadow around the card, and min-width: 300px ensures the card has a minimum width. The content is vertically and horizontally centered.
h1:

Styles the heading (city name) inside the card. The top margin is removed (margin-top: 0), and a margin of 25px is added to the bottom to create space below the heading.
.cityDisplay, .tempDisplay:

Displays the city name and temperature information in a large, bold font. The font size is set to 3.5rem, and margin-bottom: 25px adds space below the elements.
.descDisplay:

Styles the weather description text to be both italic and bold, with a font size of 2rem.
.weatherEmoji:

Displays the weather emoji in a very large font size (7.5rem) to make it prominent.
.errorDisplay:

Defines the styling for the error message. The font size is set to 2.5rem, making the message stand out. The text color is darkened (hsla(0, 0%, 0%, 0.75)) for better visibility.
HTML Code Explanations:
<!DOCTYPE html>:

Indicates the beginning of the HTML5 document. It informs the browser that the page is written in HTML5 format.
<html lang="en">:

Marks the start of the HTML document. The lang="en" attribute specifies that the language of the page is English, helping browsers and search engines interpret the language correctly.
<head> and its contents:

Contains metadata and links for the page. It specifies the character set (UTF-8) and the page's mobile compatibility. The <title> tag defines the page title that appears in the browser tab, and the external CSS file is linked here.
<body>:

Contains the visual content of the page. All the HTML elements that users interact with are found here.
<form class="weatherForm">:

Defines the form that will allow users to enter the city name and request weather information. The class="weatherForm" is used for styling the form and linking it to JavaScript for interactivity.
<input type="text" class="cityInput" placeholder="Enter city">:

This is the input field where users will enter the city name. The placeholder="Enter city" text is displayed as a hint in the field, instructing users what to do.
<button type="submit">Get Weather</button>:

The button used to submit the form and trigger the JavaScript logic. Once clicked, the form sends the data and processes the weather information.
<div class="card">:

Defines the area where weather information will be displayed. This section will visually show the weather data for the city entered by the user.
<h1 class="cityDisplay">Miami</h1>:

Displays the name of the city. Initially, it is set to "Miami," but JavaScript will update it dynamically based on user input.
<p class="tempDisplay">90'f</p>:

Displays the temperature information. The value "90'f" is static for now, but it will be dynamically replaced by the actual temperature from the API.
<p class="humidityDisplay">Humidity: 75%</p>:

Shows the humidity percentage. Like temperature, this value is static at first but will be dynamically updated with real data from the API.
<p class="descDisplay">Clear skies</p>:

Provides a description of the weather conditions (e.g., "Clear skies"). This text will be replaced with the real description from the weather API.
<p class="weatherEmoji">:D</p>:

This placeholder will display the weather emoji corresponding to the current weather condition. Initially, it shows "
," but it will change based on the weather ID.
<p class="errorDisplay">Please enter a city</p>:

Displays an error message when the user submits the form without entering a city. The message starts visible but will be hidden unless there's an error.
<script src="index.js"></script>:

Links the JavaScript file (index.js) to the HTML. This file handles all the dynamic behavior, like fetching weather data and displaying it.
This HTML structure provides a simple form for the user to enter a city name, fetches weather data using JavaScript, and displays the results (or errors) within a card on the page. JavaScript is used to dynamically update the content based on the city's weather.

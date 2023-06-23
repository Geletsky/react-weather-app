<h1 align="center">React Weather App</h1>

## Description:

This is a weather applications built using React that allows users to check the current weather and weather forecast for various cities. The application utilizes the `OpenWeatherMap API` to fetch weather data and the `GeoDB Cities API` to retrieve citynames. Additionally, the `react-select-async-paginate` library is used to enhance the user experience by providing a convenient city search functionality.

## Features:

- **Current Weather:** Displays the current weather conditions for the selected city.

- **Detailed Weather Information:** Provides a detailed description of current weather conditions such as pressure, humidity and wind speed.

- **Weather Forecast:** Shows the weather forecast for 3 days, 5 days and 7 days, which allows users to plan ahead. The forecast includes temperature highs and lows, weather descriptions, and icons representing weather conditions.

- **City Selection:** Using the react-select-async-paginate library to improve city selection. Users can easily search for a specific city, and the app will give suggestions as they type.

## Installation:

```bash
# Clone the repository:
git clone https://github.com/Geletsky/react-weather-app.git

# Navigate to the project directory:
cd project-directory

# Install dependencies:
npm install

#Create a .env file in the project root directory and add the following lines, replacing <YOUR_API_KEY> with your respective API keys:
REACT_APP_WEATHER_API_KEY=<YOUR_WEATHER_API_KEY>
REACT_APP_RAPID_API_KEY=<YOUR_RAPID_API_KEY>

# Start the development server:
npm start
```

## Usage:

By launching the React Weather app, you will see a search bar where you can start entering the name of the city. As you type, the app will issue suggestions based on the GeoDB Cities API. Select a city from the drop-down list to view the current weather and forecast.

The main page will display the current weather conditions for the selected city, including temperature, humidity, wind speed and pressure.

To view the weather forecast for several days, go to the appropriate tabs. Each tab will display the predicted temperatures, weather descriptions, and weather icons for the corresponding time period.

## Demo:

You can access the live demo of this application [here](https://react-weather-app-rust-theta.vercel.app/)

## Author:

If you have any questions or suggestions regarding this project, feel free to contact the project owner: [here](https://github.com/Geletsky)
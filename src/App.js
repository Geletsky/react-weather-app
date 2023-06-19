import React, { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { WEATHER_API_URL } from './api/api';

function App() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState(null);

	const handleOnSearchChange = (searchData) => {
		const [latitude, longitude] = searchData.value.split(' ');

		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
		const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)

		Promise.all([currentWeatherFetch, forecastWeatherFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecastWeather({ city: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	}

	console.log(currentWeather);
	console.log(forecastWeather);

	return (
		<div className="container">
			<Header onSearchChange={handleOnSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
		</div>
	);
}

export default App;
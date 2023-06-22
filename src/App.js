import React from 'react';
import './styles/App.scss';
import { useWeatherData } from './hooks/useWeatherData';
import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import CurrentWeatherDescription from './components/CurrentWeatherDescription/CurrentWeatherDescription';
import Tabs from './components/UI/Tabs/Tabs';

function App() {
	const [currentWeather, forecastWeather, handleOnSearchChange] = useWeatherData();

	return (
		<div className="container">
			<Header onSearchChange={handleOnSearchChange} />
			{currentWeather &&
				<div style={{ display: 'flex', gap: '50px' }}>
					<CurrentWeather data={currentWeather} />
					<CurrentWeatherDescription data={currentWeather} />
				</div>}
			{forecastWeather && <Tabs data={forecastWeather} />}
		</div>
	);
}

export default App;
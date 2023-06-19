import React from 'react';
import cl from './CurrentWeatherDescription.module.scss';

export default function CurrentWeatherDescription({ data }) {
	return (
		<div className={cl.currentWidgetDescription}>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src="icons/temperature.svg" alt="Temperature" />
				</div>
				<div className={cl.name}>Temperature</div>
				<div className={cl.text}>{Math.round(data.main.temp)}° - feels like {Math.round(data.main.feels_like)}°</div>
			</div>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src="icons/pressure.svg" alt="Pressure" />
				</div>
				<div className={cl.name}>Pressure</div>
				<div className={cl.text}>{data.main.pressure} mm of mercury column</div>
			</div>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src="icons/precipitation.svg" alt="Precipitation" />
				</div>
				<div className={cl.name}>Humidity</div>
				<div className={cl.text}>{data.main.humidity}%</div>
			</div>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src="icons/wind.svg" alt="Wind" />
				</div>
				<div className={cl.name}>Wind</div>
				<div className={cl.text}>{data.wind.speed} m/s</div>
			</div>
		</div>
	)
}

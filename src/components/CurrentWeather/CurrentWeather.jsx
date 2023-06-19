import React from 'react';
import cl from './CurrentWeather.module.scss';

export default function CurrentWeather({ data }) {
	return (
		<div className={cl.currentWidget}>
			<div className={cl.wrapperTop}>
				<div className={cl.infoLeft}>
					<div className={cl.temp}>{Math.round(data.main.temp)}°</div>
					<div className={cl.day}>Today</div>
				</div>
				<div className={cl.infoRight}>
					<img src={`icons/${data.weather[0].icon}.png`} alt="Image" />
				</div>
			</div>
			<div className={cl.wrapperBottom}>
				<div className={cl.city}>City: {data.city}</div>
			</div>
		</div>
	)
}
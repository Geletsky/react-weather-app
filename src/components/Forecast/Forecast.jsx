import React from 'react';
import cl from './Forecast.module.scss';

export default function Forecast({ data, days }) {
	const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const dayInWeek = new Date().getDay();

	const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));
	
	return (
		<div className={cl.widgetForecast} style={{ marginTop: '50px' }}>
			{data.list.slice(0, days).map((item, id) => (
				<div className={cl.widgetItem} key={id}>
					<div className={cl.day}>{forecastDays[id]}</div>
					<div className={cl.icon}>
						<img src={`icons/${item.weather[0].icon}.png`} alt="Icon" />
					</div>
					<div className={cl.max}>+{Math.round(item.main.temp_max)}</div>
					<div className={cl.min}>+{Math.round(item.main.temp_min)}</div>
					<div className={cl.description}>{item.weather[0].description}</div>
				</div>
			))}
		</div>
	)
}

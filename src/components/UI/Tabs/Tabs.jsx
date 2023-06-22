import React, { useState } from 'react';
import cl from './Tabs.module.scss';
import Forecast from '../../Forecast/Forecast';

export default function Tabs({ data }) {

	const tabs = [
		{ label: 'For 3 days', days: 3 },
		{ label: 'For 5 days', days: 5 },
		{ label: 'For 7 days', days: 7 }
	]

	const [toogle, setToogle] = useState(3);

	return (
		<div className={cl.wrapper}>
			<div className={cl.navigation}>
				{tabs.map((item, id) => (
					<button
						key={id}
						className={toogle === id + 1 ? [cl.tabsLink, cl.active].join(' ') : cl.tabsLink}
						onClick={() => setToogle(id + 1)}>
						{item.label}
					</button>
				))}
				<button
					style={{ marginLeft: 'auto' }}
					className={cl.tabsLink}
					onClick={() => setToogle(3)}>
					Cancel
				</button>
			</div>

			{tabs.map((item, id) => (
				<div className={cl.content} key={id}>
					<div
						className={toogle === id + 1 ? [cl.item, cl.active].join(' ') : cl.item}>
						<Forecast data={data} days={item.days} />
					</div>
				</div>
			))}
		</div>
	)
}

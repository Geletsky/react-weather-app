import React, { useState } from 'react';
import cl from './Tabs.module.scss';
import Forecast from '../../Forecast/Forecast';

export default function Tabs({ data }) {

	const [toogle, setToogle] = useState(3);

	return (
		<div className={cl.wrapper}>
			<div className={cl.navigation}>
				<button
					className={toogle === 1 ? [cl.tabsLink, cl.active].join(' ') : cl.tabsLink}
					onClick={() => setToogle(1)}>
					For 3 days
				</button>
				<button
					className={toogle === 2 ? [cl.tabsLink, cl.active].join(' ') : cl.tabsLink}
					onClick={() => setToogle(2)}>
					For 5 days
				</button>
				<button
					className={toogle === 3 ? [cl.tabsLink, cl.active].join(' ') : cl.tabsLink}
					onClick={() => setToogle(3)}>
					For 7 days
				</button>
				<button
					style={{marginLeft: 'auto'}}
					className={cl.tabsLink}
					onClick={() => setToogle(3)}>
					Cancel
				</button>
			</div>
			<div className={cl.content}>
				<div
					className={toogle === 1 ? [cl.item, cl.active].join(' ') : cl.item}>
					<Forecast data={data} days='3' />
				</div>
			</div>
			<div className={cl.content}>
				<div
					className={toogle === 2 ? [cl.item, cl.active].join(' ') : cl.item}>
					<Forecast data={data} days='5' />
				</div>
			</div>
			<div className={cl.content}>
				<div
					className={toogle === 3 ? [cl.item, cl.active].join(' ') : cl.item}>
					<Forecast data={data} days='7' />
				</div>
			</div>
		</div>
	)
}

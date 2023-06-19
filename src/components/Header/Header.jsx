import React from 'react';
import cl from './Header.module.scss';
import logoImage from '../../assets/icon/logo.svg';

export default function Header() {
	return (
		<header className={cl.header}>
			<div className={cl.wrapper}>
				<img src={logoImage} alt="Logo" />
				<div className={cl.logoText}>React weather</div>
			</div>
			<input type="text" />
		</header>
	)
}

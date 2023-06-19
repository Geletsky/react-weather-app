import React from 'react';
import cl from './Header.module.scss';
import logoImage from '../../assets/icon/logo.svg';
import Search from '../UI/Search/Search';

export default function Header({ onSearchChange }) {
	return (
		<header className={cl.header}>
			<div className={cl.wrapper}>
				<img src={logoImage} alt="Logo" />
				<div className={cl.logoText}>React weather</div>
			</div>
			<Search onSearchChange={onSearchChange} />
		</header>
	)
}
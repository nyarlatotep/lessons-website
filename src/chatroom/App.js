import React from 'react';
import './App.css';
import { AuthenticatedApp } from './components/AuthenticatedApp/index';
import { UnauthenticatedApp } from './components/UnauthenticatedApp/index';
import { useAuth } from './hooks/useAuth';

import { Themes } from '../assets/scripts/theme';

export default function App ( { ...props } ) {
	const { user } = useAuth();
	const {
		theme
	} = props;

	var themes = theme === Themes.dark
		? Themes.light : Themes.dark;
	return (
		<div className='container'
			style={ themes.bodyTheme }>
			<h1>💬Chat Room</h1>
			{ user ? <AuthenticatedApp theme={ themes } /> : <UnauthenticatedApp theme={ themes } /> }
		</div>
	);
}
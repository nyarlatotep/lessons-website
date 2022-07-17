import React from 'react';
import { loginWithGoogle } from '../services/firebase';

const AuthContext = React.createContext();

const AuthProvider = props => {
	const [ user, setUser ] = React.useState( null );

	const login = async () => {
		const user = await loginWithGoogle();

		if ( !user ) {
			alert( 'Authentication proccess failed! \n\r Please try again, if the problem persist contact the page administrator' );
		};

		setUser( user );
	};

	const value = { user, login };
	return <AuthContext.Provider value={ value } { ...props } />;
};

export { AuthContext, AuthProvider };
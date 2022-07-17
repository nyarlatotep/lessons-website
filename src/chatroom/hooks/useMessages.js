import React from 'react';
import { getMessages } from '../services/firebase';

function useMessages ( roomId ) {
	const [ messages, setMessages ] = React.useState( [] );

	React.useEffect( () => {
		const unsuscribe = getMessages( roomId, setMessages );
		return unsuscribe;
	}, [ roomId ] );
	return messages;
}

export { useMessages };
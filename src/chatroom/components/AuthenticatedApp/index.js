import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';

function AuthenticatedApp ( { ...props } ) {
	const { theme } = props;
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Landing theme={ theme } /> } />
				<Route path='/room/:id' element={ <ChatRoom theme={ theme } /> } />
			</Routes>
		</BrowserRouter>
	);
}

export { AuthenticatedApp };
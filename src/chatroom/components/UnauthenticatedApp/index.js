import { useAuth } from '../../hooks/useAuth';
import './styles.css';

function UnauthenticatedApp ( { ...props } ) {
	const { login } = useAuth();
	const { theme } = props
	return (
		<>
			<h2 className='chat-h2' style={ theme.content }>Log in to join the chat room!</h2>
			<div>
				<button onClick={ login } className='login'>
					Login with Google
				</button>
			</div>
		</>
	);
}

export { UnauthenticatedApp };
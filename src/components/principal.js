import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGrinTongue } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';


export function Header ( props ) {

	return (
		<>
			<header id='app-header' style={ props.theme.content }>
				<aside id='header-aside-lt' className='header-aside'>
					<p>
						<FontAwesomeIcon color='yellow' icon={ faGrinTongue } />
						Bienvenida Rena! | Welcome Rena!
					</p>
				</aside>

				<aside id='header-aside-rt' className='header-aside'>
					<nav id='aside-rt-nav'>
						{ props.menu }
						{ props.chatroom }
						{ props.button }
					</nav>
				</aside>
			</header>
		</>
	);
};
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGrinTongue } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';


export class Header extends Component {
	static name = Header.name;

	render () {

		return (
			<>
				<header id='app-header' style={ this.props.theme.content }>
					<aside id='header-aside-lt' className='header-aside'>
						<p>
							<FontAwesomeIcon color='yellow' icon={ faGrinTongue } />
							Bienvenida Rena! | Welcome Rena!
						</p>
					</aside>

					<aside id='header-aside-rt' className='header-aside'>
						<nav id='aside-rt-nav'>
							{ this.props.menu }
							{ this.props.button }
						</nav>
					</aside>
				</header>
			</>
		);
	};
}
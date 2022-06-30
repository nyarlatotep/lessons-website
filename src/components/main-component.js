import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext, Themes } from '../assets/scripts/theme';

import { Header } from './principal';
import { Lessons } from './lessons-component'

import { faMountainSun, faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { faDog, faDolly, faStar, faHandsBubbles, faFileText, faQuidditchBroomBall } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';

export class Main extends Component {
	static name = Main.name;
	constructor ( props ) {
		super( props );

		this.state = {
			theme: Themes.light,
			page: 'Present'
		};

		this.toogle_theme = () => {
			var theme =
				this.state.theme === Themes.dark
					? Themes.light
					: Themes.dark;
			this.setState( { theme: theme } );
		}
	};

	componentDidMount = () => this.toogle_theme;

	handle_section ( ev ) {
		let res;
		var target = ev.target;
		var name = target.name;

		switch ( name ) {
			case 'Present':
				res = 'Present';
				break;
			case 'Past':
				res = 'Past';
				break;
			case 'Future':
				res = 'Future';
				break;
			case 'Grammar':
				res = 'Grammar';
				break;
			case 'Texts':
				res = 'Texts';
				break;
			case 'Notes':
				res = 'Notes';
				break;
			case 'Tests':
				res = 'Tests';
				break;
			default:
				res = this.state.page;
		}
		this.setState( { page: res } );

		ev.preventDefault();
	};

	componentDidUpdate = () => this.handle_section;

	render () {
		/* This shape of code uses the state to check the current theme 
					and sets the same theme to the body */
		var body = document.body;
		if ( this.state.theme === Themes.light )
			body.style.backgroundColor = Themes.light.bodyTheme.backgroundColor;
		if ( this.state.theme === Themes.dark )
			body.style.backgroundColor = Themes.dark.bodyTheme.backgroundColor;

		const data = [
			{
				key: 1, name: 'Present', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Present' icon={ faDog } />
			},
			{ key: 2, name: 'Past', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Past' icon={ faDolly } /> },
			{ key: 3, name: 'Future', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Future' icon={ faStar } /> },
			{ key: 4, name: 'Grammar', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Grammar' icon={ faHandsBubbles } /> },
			{ key: 5, name: 'Texts', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Texts' icon={ faFileText } /> },
			{ key: 6, name: 'Notes', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Notes' icon={ faNoteSticky } /> },
			{ key: 7, name: 'Tests', icon: <FontAwesomeIcon style={ { width: 12, height: 12 } } name='Tests' icon={ faQuidditchBroomBall } /> },
		];
		/* Toogle theme button that uses context to propagate the theme to the worth page */
		const Button =
			<button
				style={ this.state.theme.bodyTheme }
				id='theme-btn'
				name='Theme button'
				type='button'
				onClick={ this.toogle_theme } >
				{
					this.state.theme === Themes.dark
						? <FontAwesomeIcon icon={ faMountainSun } />
						: <FontAwesomeIcon icon={ faCloudMoonRain } />
				}
			</button>
		/* Menu that contains the buttons to navigate between pages */
		const MenuBtns =
			<menu id='header-menu'>
				{ data.map( elem => {
					return (
						<button
							onClick={ ( e ) => this.handle_section( e ) }
							key={ elem.key }
							name={ elem.name }
							type='button' >
							{ elem.icon }
						</button>
					);
				} ) }
			</menu>

		return (
			<>
				<ThemeContext.Provider value={ this.state.theme }>
					<Header button={ Button } theme={ this.state.theme } menu={ MenuBtns } />
					<Lessons theme={ this.state.theme } page={ this.state.page } />
				</ThemeContext.Provider>
			</>
		);
	};
}

Main.contextType = ThemeContext;
export default Main;
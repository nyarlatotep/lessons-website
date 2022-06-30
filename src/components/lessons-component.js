import { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio, faSchool, faList } from '@fortawesome/free-solid-svg-icons';

import { Present } from '../lessons/present';
import { Past } from '../lessons/past';
import { Future } from '../lessons/future';
import { Grammar } from '../lessons/grammar';
import { Notes } from '../lessons/notes';
import { Texts } from '../lessons/text';
import { Tests } from '../lessons/test';

export class Lessons extends Component {
	static name = Lessons.name;
	constructor ( props ) {
		super( props );

		this.state = {
			hide_exercises: true,
			hide_audio: false,
			hide_verb: false,
			marginLeft: -61
		}

		this.handle_audio = this.handle_audio.bind( this );
		this.handle_exercises = this.handle_exercises.bind( this );
		this.handle_audio = this.handle_listVerb.bind( this );
	};

	handle_exercises () {
		var hidden =
			this.state.hide_exercises === true
				? false : true;
		this.setState( { hide_exercises: hidden } );
	}
	handle_audio () {
		var hidden =
			this.state.hide_audio === true
				? false : true;
		this.setState( { hide_audio: hidden } );
	}
	handle_listVerb () {
		var hidden =
			this.state.hide_verb === true
				? false : true;
		this.setState( { hide_verb: hidden } );
	}

	handle_mouseOver ( ev ) {
		ev.preventDefault();
		this.setState( { marginLeft: 0 } );
	}

	handle_mouseLeave ( ev ) {
		ev.preventDefault();
		this.setState( { marginLeft: -61 } );
	}

	render () {
		let page;
		var Page = this.props.page;
		switch ( Page ) {
			case 'Present':
				page =
					<Present theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			case 'Past':
				page =
					<Past theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			case 'Future':
				page =
					<Future theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			case 'Grammar':
				page =
					<Grammar theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			case 'Texts':
				page =
					<Texts theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			case 'Notes':
				page =
					<Notes theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			case 'Tests':
				page =
					<Tests theme={ this.props.theme.content } hideAudio={ this.state.hide_audio }
						hideExercise={ this.state.hide_exercises } hideVerb={ this.handle_listVerb } />;
				break;
			default:
				return page;
		}

		return (
			<>
				<div id='principal-div'>
					<aside id='menu-aside'>
						<nav style={ { marginLeft: this.state.marginLeft } }
							onMouseLeave={ ( e ) => this.handle_mouseLeave( e ) }
							onMouseOver={ ( e ) => this.handle_mouseOver( e ) }>
							<menu>

								<button type='button' onClick={ this.handle_audio } className='menu-btn'>
									Audios{ ' ' }<FontAwesomeIcon color='rgb(188 10 10)' icon={ faFileAudio } />
								</button>
								{ ' ' }
								<button type='button' onClick={ this.handle_exercises } className='menu-btn'>
									Ejerci.{ '  ' }<FontAwesomeIcon style={ { marginLeft: 7 } } color='rgb(180 225 49)' icon={ faSchool } />
								</button>
								{ ' ' }
								<button type='button' onClick={ this.handle_listVerb } className='menu-btn'>
									Verbos{ ' ' } <FontAwesomeIcon color='rgb(10 10 68)' icon={ faList } />
								</button>
							</menu>
						</nav>
					</aside>

					<div id='content-div'>
						{ page }
					</div>

				</div>
			</>
		);
	};

}



import { Component } from 'react';

export class Notes extends Component {
	static name = Notes.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<h2>Notas de interés</h2>
			</>
		);
	};

}


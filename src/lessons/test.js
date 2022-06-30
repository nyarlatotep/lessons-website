import { Component } from 'react';

export class Tests extends Component {
	static name = Tests.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<h2>Exámenes y Cuestionarios</h2>
			</>
		);
	};

}


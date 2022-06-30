import { Component } from 'react';

export class Grammar extends Component {
	static name = Grammar.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<h2>Gramática</h2>
			</>
		);
	};

}



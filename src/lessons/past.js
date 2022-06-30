import { Component } from 'react';

export class Past extends Component {
	static name = Past.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<h2>Pasado Simple y Pasado Continuo</h2>
			</>
		);
	};
}



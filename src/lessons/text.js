
import { Component } from 'react';

export class Texts extends Component {
	static name = Texts.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<h2>Texto / Escritura</h2>
			</>
		);
	};

}


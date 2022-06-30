
import { Component } from 'react';

export class Future extends Component {
	static name = Future.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<h2>Futuro Simple</h2>
			</>
		);
	};

}


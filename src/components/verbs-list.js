import { Component } from 'react';

export class VerbsList extends Component {
	static name = VerbsList.name;
	render () {
		return (
			<>
				<table id='verbs-table'>
					<caption>Verbos Regulares</caption>
					<thead>
						<tr>
							<td>
								Verbo
							</td>

							<td>
								Pasado<br />
								(Verb + "ed")
							</td>

							<td>
								Futuro<br />
								(Auxiliar "will")
							</td>

							<td>
								Gerundio<br />
								(Verbo + "ing")
							</td>

							<td>
								Significado
							</td>
						</tr>

					</thead>

					<tbody>
						<Verbs />
					</tbody>

				</table>
			</>
		);
	};
}

function Verbs () {
	const { verbs } = require( '../assets/scripts/verbs' );

	//const list = [
	//	{ key: 1, key2: 'one', key3: 'a', key4: 'A', key5: '1', verb: 'Arrive', significate: 'Arribar/Llegar', infinitive: 'Arrive/Arrives', gerundio: 'Arriving', past: 'Arrived' },
	//	{ key: 2, key2: 'two', key3: 'b', key4: 'B', key5: '2', verb: 'Play', significate: 'Jugar', infinitive: 'Play/Plays', gerundio: 'Playing', past: 'Played' },
	//	{ key: 3, key2: 'three', key3: 'c', key4: 'C', key5: '3', verb: 'Jump', significate: 'Saltar', infinitive: 'Jump/Jumps', gerundio: 'Jumping', past: 'Jumped' },
	//	{ key: 4, key2: 'four', key3: 'd', key4: 'D', key5: '4', verb: 'Teach', significate: 'Enseñar', infinitive: 'Teach/Teaches', gerundio: 'Teaching', past: 'Teached' },
	//	{ key: 5, key2: 'five', key3: 'e', key4: 'E', key5: '5', verb: 'Wish', significate: 'Desear', infinitive: 'Wish/Wishes', gerundio: 'Wishing', past: 'Wished' },
	//];


	return (
		<>
			{
				verbs.map( elem => {
					return (
						<tr key={ elem.key }>
							<td key={ elem.verb }>
								{ elem.verb }
							</td>
							<td key={ elem.past }>
								{ elem.past }
							</td>
							<td key={ elem.future }>
								{ elem.future }
							</td>
						</tr>
					)
				} ) }
		</>
	)
};

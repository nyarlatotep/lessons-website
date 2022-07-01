
import { Component } from 'react';

export class PresentExercises extends Component {
	static name = PresentExercises.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	render () {
		return (
			<>
				<Choices />
				<Fill />
			</>
		);
	};
}

const Choices = () => {
	return (
		<section>
			<h4>Presente Simple</h4>
			<p className='instructions'>Selecciona la respuesta correcta utilizando el presente simple en Inglés</p>
			<ol>
				<li className='exercises-li'>
					<label>
						She <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value='thinks'>thinks</option>
							<option value='thinks'>does think</option>
							<option value='thinkes'>does think</option>
						</select>
						(think) Manuel is crazy.
					</label>

				</li>
				<li className='exercises-li'>
					<label>
						They <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="don' t know">don't know</option>
							<option value="doesn't know">doesn't know</option>
							<option value="noy know">not know</option>
						</select>
						(not know) what to say.
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						He <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="isn't">isn't</option>
							<option value="aren't">aren't</option>
							<option value="doesn't be">doesn't be</option>
						</select>
						(not be) a relative of mine.
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						She <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="washes">washes</option>
							<option value="wash">wash</option>
							<option value="is washes">is washes</option>
						</select>
						(wash) here car every week.
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						Paul <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="sleepes">sleepes</option>
							<option value="sleep">sleep</option>
							<option value="sleeps">sleeps</option>
						</select>
						(sleep) seven hours at day.
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						She always <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="win">win</option>
							<option value="wins">wins</option>
							<option value="is wins">is wins</option>
						</select>
						(win).
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						<select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="are">are</option>
							<option value="is">is</option>
							<option value="am">am</option>
						</select>
						(be) they in love?
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						<select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="am">am</option>
							<option value="is">is</option>
							<option value="are">are</option>
						</select>
						(be) she a friend of yours?
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						Sarah <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="doesn't like">doesn't like</option>
							<option value="doesn't likes">doesn't likes</option>
							<option value="dont like">dont like</option>
						</select>
						(not like) pop music?
					</label>
				</li>

				<li className='exercises-li'>
					<label>
						Mary and Jhon <select results={ 3 }>
							<option value='select'>Select..</option>
							<option value="are">are</option>
							<option value="is">is</option>
							<option value="be">be</option>
						</select>
						(be my cousins)
					</label>
				</li>
			</ol>
		</section>
	);
}

// Exercises section. The user must fill the inputs, when finish each answer is review
const Fill = ( props ) => {
	return (
		<div>
			<h4>Presente simple o continuo</h4>

			<p className='instructions'>
				Completa las frases con la forma correcta del verbo que se encuentra entre paréntesis dependiendo si se trata de presente simple o continuo
			</p>
			<section id='exercises-section'>
				<ol>
					<li className='exercises-li'>
						<label>
							The train always <input type="text" value={ props.handleEx1 } /> (leave) on time.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							That's strange. They <input type="text" value={ props.handleEx1 } /> (not to watch) TV.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							He <input type="text" value={ props.handleEx1 } /> (not to speak) very good English.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Please be quite! I <input type="text" value={ props.handleEx1 } /> (do) my homework.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Listen! Jhon <input type="text" value={ props.handleEx1 } /> music (play).
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							I never <input type="text" value={ props.handleEx1 } /> (go) to the swimming pool.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							She <input type="text" value={ props.handleEx1 } /> (practise) for four hours everyday .
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Right now, David <input type="text" value={ props.handleEx1 } /> (look for) a job.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							The girls choir <input type="text" value={ props.handleEx1 } /> (have) beautiful voices.<br /> Listen! They <input type="text" value={ props.handleEx1 } /> ( sign) now.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Look! It <input type="text" value={ props.handleEx1 } /> (rain) outside. We can't go out to play.
						</label>
					</li>
				</ol>

				<ol>
					<li className='exercises-li'>
						<label>
							What's the matter? Why <input type="text" value={ props.handleEx1 } /> (cry/you)?
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Where <input type="text" value={ props.handleEx1 } /> (live/they)?.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							<input type="text" value={ props.handleEx1 } /> (you/want) to go to the cinema tonight?
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							What time does the show <input type="text" value={ props.handleEx1 } /> (begin)?
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							<input type="text" value={ props.handleEx1 } /> you <input type="text" value={ props.handleEx1 } /> (know) who this watch <input type="text" value={ props.handleEx1 } /> (belong) to?.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Who <input type="text" value={ props.handleEx1 } /> (drive) that Mercedes that is parked outside?.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							What <input type="text" value={ props.handleEx1 } /> (Lisa/do)? She is a waitress.
						</label>
					</li>

					<li className='exercises-li'>
						<label>
							Louise, Why <input type="text" value={ props.handleEx1 } /> you always <input type="text" value={ props.handleEx1 } /> (leave) your dirty coffe mug on my desk? It's really irritating.
						</label>
					</li>
				</ol>
			</section>
		</div>
	)
}
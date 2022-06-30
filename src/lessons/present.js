import { Component } from 'react';

export class Present extends Component {
	static name = Present.name;

	render () {
		return (
			<div className='description' style={ this.props.theme }>
				<h1>Presente Simple y Presente Continuo</h1>
				<main id='spresent-main'>
					<article id='spresent-article'>
						<div hidden={ !this.props.hideExercise }>
							<Description />
						</div>
						<div hidden={ this.props.hideExercise }>
							<h3>Ejercicios</h3>
						</div>
					</article>
				</main>
			</div>
		);
	};
}

const Description = () => {
	return (
		<>
			<article id='article-description'>
				<h2>Diferencia entre presente y presente continuo</h2>

				<p>
					<mark>La principal difenrencia entre presente simple y el presente continuo, <b>esta en su uso.</b></mark>
				</p>

				<div id='description-div-one'>
					<aside id='div-one-aside-one'>
						<h3>Presente Continuo</h3>
						<p>
							El presente continuo <b>indica aciones que suceden mientras hablamos, acciones futuras próximas</b>
						</p>
					</aside>

					<aside id='div-one-aside-two'>
						<h3>Presente Simple</h3>
						<p>
							El presente simple se utiliza <b>para hablar en general sobre acciones en tiempo presente y expresar acciones habituales o situaciones permanentes.</b>
						</p>
					</aside>
				</div>

				<p><mark>Otra diferencia es la función de ambos en tiempos verbales</mark></p>

				<div id='description-div-two'>
					<aside id='div-two-aside-one'>
						<p> Mientras que para el presente continuo utilizamos el verbo auxiliar <mark><b>"TO BE"</b></mark> más el gerundio del verbo correspondiente.</p>
					</aside>

					<aside id='div-two-aside-two'>
						<p>Para el presente simple se utiliza el verbo en presente.</p>
					</aside>
				</div>
			</article>

			<article id='article-description-two'>
				<h2>Formación del presente simple</h2>
				<p>
					El presente simple se construye a partir del verbo en su fomr a infinitiva, recuerda que a la tercera persona del singular se le añade una "S"
				</p>
				<h4>Ejemplo:</h4>
				<Examples />

				<p className='custom-p'>
					A las conjugaciones de tercera persona, si el verbo termina en " S, SH, CH, o X" se le añade "ES".<br />
				</p>

				<h4>Ejemplo:</h4>

				<ul className='custom-ul'>
					<li>She kisses her boyfriend { '//' } Ella besa a su novio.</li>
					<li>He fishes at sea { '//' } El pesca en el mar.</li>
					<li>She watches a film every night { '//' } Ella observa una película todas las noches.</li>
					<li>He goes to the office every day { '//' } El va a la oficina todos los días.</li>
				</ul>

				<p className='custom-p'>
					Si el verbo termina en "Y" tras una consonante,se sustituye por una "i" y se añade "ES".
				</p>
				<br />

				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>He studies English and French { '//' } El estudia Inglés y Francés</li>
				</ul>
			</article>
			<article id="article-description-three">
				<h2>Formación del presente continuo</h2>

				<p>
					El presente continuo se construye a partir del presente del verbo "TO BE" y la forma "ING" (Gerundio) de un verbo que es el que desarrolla la acción.
				</p>

				<h4>Ejemplo:</h4>
				<ul>
					<li>I am going to the cinema{ ' // ' }Yo estoy yendo al cine</li>
					<li>She is listening to music{ ' // ' }Ella está escuchando música</li>
				</ul>
			</article>

			<article id='article-description-four'>

				<h2>Cuando usar cada uno</h2>

				<p>
					El presente simple se emplea en ingles para:
				</p>

				<p>
					Hablar de cosas que suceden de manera habitual, hábitos, hechos cotidianos o regulares. En este caso sueles ir acompañados de adverbios de frecuencia;
				</p>

				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>I drink cofee every day{ ' // ' }Yo tomo cafe todos los días</li>
				</ul>

				<p className='custom-p'>Referirse a afirmaciones generales o a hechos científicos</p>

				<h4>Ejemplo</h4>
				<ul className='custom-ul'>
					<li>I like chocolate { ' // ' }Me gusta el chocolate</li>
					<li>Water boils at 100 degrees celsius{ ' // ' }El agua hierve a 100 grados centigrados</li>
				</ul>

				<p className='custom-p'>Para eventos que va a ocurrir cons seguridad en un futuro próximo, que sueles ser de un horario o programa.</p>

				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>The train arrives at 10:00 o'clock</li>
				</ul>

				<p className='custom-p'>Para dar instrucciones en modo imperativo.</p>
				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>Please, close the window{ ' // ' }Por favor, cierra la ventana</li>
				</ul>

				<p className='custom-p'>Para hablar lo que sucede en la ficción de libros o películas.</p>
				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>At the end of the book, the detective catches the killer{ ' // ' }Al final del libro, el dective atrapa al asesino.
					</li>
				</ul>
			</article>
		</>
	);
}

const Examples = () => {
	const list = [
		{ key: 1, e1: "I work in Madrid", spanish: 'Yo trabajo en Madrid' },
		{ key: 2, e1: "She starts to work at 8:00 am", spanish: 'Ella comienza a trabajar a las 8:00 am' }
	];
	return (
		<ul className='custom-ul'>
			{
				list.map( el => {
					return (
						<li key={ el.key } className='example-li'>
							{ el.e1 }{ ' ' }{ '//' } { ' ' }{ el.spanish }
						</li>
					)
				} ) }
		</ul>
	)
}
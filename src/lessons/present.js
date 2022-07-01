import { Component } from 'react';
import { Themes } from '../assets/scripts/theme';

import { PresentExercises } from '../exercises/present-ex';

export class Present extends Component {
	static name = Present.name;

	render () {
		return (
			<div className='description' style={ this.props.theme }>
				<h1>Presente Simple y Presente Continuo</h1>
				<main id='spresent-main'>
					<article id='spresent-article'>
						<div hidden={ !this.props.hideExercise }>
							{
								this.props.interrogative === false
									? <Description theme={ this.props.theme } />
									: <Interrogative theme={ this.props.theme } />
							}
						</div>
						<div hidden={ this.props.hideExercise }>
							<h3>Ejercicios</h3>
							<PresentExercises />
						</div>
					</article>
				</main>
			</div>
		);
	};
}

const Description = ( props ) => {
	return (
		<>
			<article id='article-description'>
				{
					props.theme === Themes.dark.content
						? <h3 className='description-h3' style={ { color: 'rgb(5 5 5 )' } }>Diferencia entre presente y presente continuo</h3>
						: <h3 className='description-h3' style={ { color: 'rgb(5 5 5)' } }>Diferencia entre presente y presente continuo</h3>
				}
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

				{
					props.theme === Themes.dark.content
						? <h3 className='description-h3' style={ { color: 'rgb(5 5 5 )' } }>Formación del presente simple</h3>
						: <h3 className='description-h3' style={ { color: 'rgb(5 5 5)' } }>Formación del presente simple</h3>
				}

				<p className='custom-p'>
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

				{
					props.theme === Themes.dark.content
						? <h3 className='description-h3' style={ { color: 'rgb(5 5 5 )' } }>Formación del presente continuo</h3>
						: <h3 className='description-h3' style={ { color: 'rgb(5 5 5)' } }>Formación del presente continuo</h3>
				}

				<p className='custom-p'>
					El presente continuo se construye a partir del presente del verbo "TO BE" y la forma "ING" (Gerundio) de un verbo que es el que desarrolla la acción.
				</p>

				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>I am going to the cinema{ ' // ' }Yo estoy yendo al cine</li>
					<li>She is listening to music{ ' // ' }Ella está escuchando música</li>
				</ul>
			</article>

			<article id='article-description-four'>

				{
					props.theme === Themes.dark.content
						? <h3 className='description-h3' style={ { color: 'rgb(5 5 5 )' } }>Cuando usar cada uno</h3>
						: <h3 className='description-h3' style={ { color: 'rgb(5 5 5)' } }>Cuando usar cada uno</h3>
				}

				<p className='custom-p'>
					El presente simple se emplea en ingles para:
				</p>

				<p className='custom-p'>
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
					<li>The train arrives at 10:00 o'clock{ ' // ' }El tren llega a las diez en punto</li>
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

const Interrogative = ( props ) => {
	return (
		<>
			<article id='article-description-two'>
				{
					props.theme === Themes.dark.content
						? <h2 style={ { color: 'rgb(5 5 5 )' } }>Presente Simple y Continuo en Interrogativo</h2>
						: <h2 style={ { color: 'rgb(5 5 5)' } }>Presente Simple y Continuo en Interrogativo</h2>
				}
				<h3 className='description-h3'>¿Cómo se usan las oraciones interrogativas en presente siemple?</h3>

				<p className='custom-p'>Cuando realizas una pregunta con el presente simple interrogativo en inlgés, esperas una respuesta por parte de la persona a quien hayas formulado la pregunta, dicha respuesta puede ser simple (si o no), o que proporcione una información concreta.
				</p>

				<p className='custom-p'><b>Preguntas simples en presente simple en interrogativo:</b></p>
				<p> Este tipo de preguntas reciben este nombre por que tienen una respuesta simple, por este motivo tambien se conocen como preguntas de yes/no. Se construyen con estructura básica de cualquier pregunta en inglés.</p>
				<h4>Ejemplo:</h4>

				<ul className='custom-ul'>
					<li>Do/Does + Sujeto + Verbo en infinitivo sin "TO" + (objeto)?</li>
				</ul>

				<p className='custom-p'>Recordemos que "Do" es el auxiliar que corresponde a todos los sujetos de una frase, salvo para los de tercera persona del singular (He/She/It), con los que tienes que usar "Does". Con las preguntas al igual que las oraciones negativas, siempre llevan una auxiliar, el verbo de la oración permanece en infinitivo.
					Es decir que no le pones la "S" al final cuando sea tercera persona</p>

				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>Mary has a car but do you have a car?{ ' // ' }Mary tiene un auto, pero ¿Tú tienes un auto?</li>
					<li>I like classical music, so ¿Does Sarah like classical music?{ ' // ' }Me gusta la música clásica, entonces ¿A Sarah le gusta la música clásica?</li>
					<li>Jhon doesn't dance, but ¿Doues he sign?{ ' // ' }Jhon no baila, pero ¿El canta?</li>
				</ul>

				<p className='custom-p'>Aunque las respuestas no sean mas que un si o un no, necesitas añadir el auxiliar de la frase a la estructura</p>
				<h4>Ejemplo</h4>
				<ul className='custom-ul'>
					<li>Yes + , + Sujeto + Do/Does.</li>
					<li>No + , + Sujeto + Don't/Doesn't</li>
					<li>Mary has a car, but ¿Do you have a car? - No, I don't{ ' // ' }Mary tiene un auto, pero ¿Tu tienes un auto? - No, no tengo.</li>
					<li>Do you read the newspapper? Because we don't read it - Yes, I do{ ' // ' }¿Lees el periódico? porque nosotros no lo leemos - Si, lo leo</li>
				</ul>
			</article>

			<article id='article-description-three'>
				<h3 className='description-h3'>Palabras Interrogativas para tomar oraciones con respuesta amplia</h3>

				<ul className='custom-ul'>
					<li>¿What/Which? (Que/Cual): Para preguntar por cosas</li>
					<li>¿Who? (Quien): Cuando preguntas por personas</li>
					<li>¿Where? (Donde): Si quieres saber un lugar</li>
					<li>¿When? (Cuando): Pregunta por un momento de tiempo</li>
					<li>¿Why? (Por Qué): Se responde con una frase completa que empieza con "because", ya que pregunta por una razón</li>
					<li>¿How? (Como): Al igual que What/which puede ir acompañado de una palabra, pero en lugar de un nombre irá un adjetivo o un adverbio</li>
				</ul>

				<h4>Ejemplo:</h4>
				<ul className='custom-ul'>
					<li>Palabra interrogativa + Do/Does + Sujeto + Verbo en infinitivo sin "To" + (objeto)?</li>
					<li>Mary has a car, so ¿What Do you have? - A bike{ ' // ' }Mary tiene un auto, entonces ¿Tu qué tienes? - Una bicicleta.</li>
					<li>We don't read newspappers here, so ¿Where do you read them? - At home{ ' // ' }Nosotros no lemos el periódico aqui, entonces ¿Dónde lo lees? - En casa</li>
				</ul>
			</article>

			<article id='article-description-three'>

				<h3 className='description-h3'>¿Cómo se forma la oración interrogativa con el presente continuo?</h3>

				<p className='custom-p'>
					Consiste en intercambiar la posición del auxiliar con la del sujeto. De esta manera indicas a tu interlocutor que le estas formulando una pregunta en lugar de constatart un hecho. Sin embargo, las preguntas en inglés se pueden hacer de tres maneras, dos de ellas las de objeto y las de sujeto requieren de una palabra donde expresa el sujeto de la pregunta la otra (simple), por el contrario constituye el esqueleto de la forma interrogativa.<br />
					En el caso de las preguntas simples en el presente continuo, solamente tienes que colocar el auxiliar delante de la persona o cosa que este realizando la acción en el momento actual en este caso, tal y como señalamos al principio la pregunta comenzará con la forma correspondiente del verbo "To Be" (am/are/is), seguido del sujeto y despues el gerundio "ing" del verbo.</p>

				<h4>Ejemplo:</h4>

				<ul className='custom-ul'>
					<li>Jhon is not at home so, ¿Is he working now?{ ' // ' }Jhon no esta en casa, entonces ¿El está trabajando ahora?</li>
					<li>My children are watching TV but ¿Are you children playing in tha park?{ ' // ' }Mis hijos están viendo TV, pero ¿Tus hijos están jugando en el parque?</li>
				</ul>

				<h3 className='description-h3'>Respuestas cortas en presente continuo</h3>

				<p className='custom-p'>
					Por lo general, este tipo de preguntas se contestan de manera afirmativa (si) o negativa (no), diremos que si o que no añadiendo el sujeto adecuado y el verbo auxiliar en su forma correspondiente. <br />
					De la misma manera las preguntas en presente continuo emplearan esta estructura empezando con yes o no, seguido del sujeto y luego el verbo "To Be" (am/are/is). Para respuestas negativas simplemente se añade not al final de las respuestas.
				</p>

				<h4>Ejemplo:</h4>

				<ul className='custom-ul'>
					<li>Jhon is not at home, so ¿Is he working now? - Yes, he is.{ ' // ' }Jhon no esta en casa, entonces ¿El está trabajando ahora? - Si, lo está.</li>
					<li>I am not feeling sad, but ¿Am I feeling happy? - Maybe{ ' // ' }No me estoy sintiendo triste, pero ¿Me estoy sintiendo felíz? - Quizás</li>
				</ul>

				<h3 className='description-h3'>Preguntas de objeto en presente continuo</h3>

				<p className='custom-p'>
					Aquí la estructura de la pregunta en presente continuo no variará en el primer caso, pero si en el segundo. O mejor dicho la estructura de la frase afirmativa se mantendrá igual.
				</p>

				<h4>Ejemplo:</h4>

				<ul className='custom-ul'>
					<li>Mary is leaving, but ¿Where is she going?{ ' // ' }Mary se esta yendo, pero ¿A dónde está yendo?</li>
					<li>¿Are they eating again?{ ' // ' }¿Ellos están comiendo de nuevo?</li>
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
	);
}
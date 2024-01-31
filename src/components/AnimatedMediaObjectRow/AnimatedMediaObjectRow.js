import { AnimatedMediaObject } from 'components';
/**
 * Render the AnimatedMediaObjectRow component.
 *
 * @return {React.ReactElement} The AnimatedMediaObjectRow component.
 */
	export default function AnimatedMediaObjectRow({ animatedMediaObjects, position }) {

		return (
			<section className="animated-media-object">
					<div className="container">                
							<div className="row">
								<div className="col">
									{!!animatedMediaObjects && animatedMediaObjects.map((animatedMediaObject, i) => {
										let classNames;

										if (position == "1") {
											classNames = (i % 2) ? 'flex-row-reverse' : ''
										} else {
											classNames = ''
										}

										return (
											<AnimatedMediaObject 
												key={i}
												id={i}
												title={animatedMediaObject.title} 
												description={animatedMediaObject.description}
												image={animatedMediaObject.image}
												classNames={classNames}
											/>
										);
									})}
								</div>
							</div>
					</div>
			</section>
		);
	}
  
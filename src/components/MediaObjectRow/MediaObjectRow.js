import { MediaObject } from 'components';
/**
 * Render the MediaObjectRow component.
 *
 * @return {React.ReactElement} The MediaObjectRow component.
 */
	export default function MediaObjectRow({ mediaObjects }) {		
		return (
			<section className="media-object">
					<div className="container">                
							<div className="row">
								<div className="col">
									{mediaObjects ? mediaObjects.map((mediaObject, i) => {
										return (
											<MediaObject 
												key={i}
												title={mediaObject.title} 
												description={mediaObject.description}
												image={mediaObject.image}
											/>
										);
									}): ''}
								</div>
							</div>
					</div>
			</section>
		);
	}
  
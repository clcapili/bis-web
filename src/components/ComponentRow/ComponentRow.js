import { Heading, ComponentItem } from 'components';
/**
 * Render the ComponentRow component.
 *
 * @return {React.ReactElement} The ComponentRow component.
 */
	export default function ComponentRow({ title, description, components }) {
		
		return (
			<section className="media-object">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								{!!title &&
									<Heading level="h2">{title}</Heading>
								}
								{!!description &&
									<div dangerouslySetInnerHTML={{__html: description}}></div>
								}
							</div>
						</div>
						
						{components ?
							<div className="mt-4">
								<div className="row">
									<div className="col">
										{components.map((componentItem, i) => {
											return (
												<ComponentItem 
													key={i}
													component={componentItem} 
												/>
											);
										})}
									</div>
								</div>
							</div>
						: ''}
					</div>
			</section>
		);
	}
  
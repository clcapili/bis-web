import { Milestone } from 'components';
/**
 * Render the MilestonesRow component.
 *
 * @return {React.ReactElement} The MilestonesRow component.
 */
	export default function MilestonesRow({ milestones }) {		
		return (
			<section className="media-object">
					<div className="container">                
						<div className="row">
							<div className="col">
								{milestones?.map((milestone, i) => {
									return (
										<Milestone 
											key={i}
											date={milestone.date} 
											title={milestone.title} 
											description={milestone.description}
											image={milestone.image}
										/>
									);
								})}
							</div>
						</div>
					</div>
			</section>
		);
	}
  
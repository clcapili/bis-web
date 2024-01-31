import { Heading, SlideshowText } from 'components';

/**
 * Render the SlideshowTextCard component.
 * 
 * @return {React.ReactElement} The SlideshowTextCard component.
 */
 export default function SlideshowTextCard({ title, slideshowTextCards }) {
	
    return (
		<section className="slideshow-text">
			<div className="container">
				{!!title && 
					<div className="row">
						<div className="col">
							<div className="mb-3">
								<Heading level="h2">{title}</Heading>
							</div>
						</div>
					</div>
				}
				
				{slideshowTextCards ?
					<div className="row">
						<div id="slideshowText" className="carousel slide" data-bs-ride="carousel">
							<div className="card">
								<div className="card-body">
									<div className="carousel-inner">
										{slideshowTextCards.map((slideshowTextCard, i) => {
											let activeSlide = '';

											activeSlide = i == 0 ? 'active' : ''

											return (
												<SlideshowText 
													key={i} 
													name={slideshowTextCard.title} 
													message={slideshowTextCard.message}
													activeSlide={activeSlide} />
											);
										})}
									</div>
								</div>
							</div>
							
							<div className="mb-2"></div>

							<div className="row">
								<div className="col-12 carousel-controls">
									<div className="carousel-control">
										<button aria-label="Previous" className="carousel-control-prev" type="button" data-bs-target="#slideshowText" data-bs-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Previous</span>
										</button>
										<button aria-label="Next" className="carousel-control-next" type="button" data-bs-target="#slideshowText" data-bs-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Next</span>
										</button>
									</div>

									<div className="carousel-indicators">
										{slideshowTextCards.map((slideshowTextCard, j) => {
											let activeIndicator = '';

											activeIndicator = j == 0 ? 'active' : ''

											return (
												<button key={j} type="button" data-bs-target="#slideshowText" className={activeIndicator} data-bs-slide-to={j}></button>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				: ''}

				
			</div>
		</section>
    );

}
  
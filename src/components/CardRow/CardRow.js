import { Heading, Card } from 'components';

/**
 * Render the CardRow component.
 *
 * @return {React.ReactElement} The CardRow component.
 */
 export default function CardRow({ title, cards, noborder }) {

    return (
        <section className="card-row">
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
                {cards ?
                    <div className="row" data-mh="p .card-title .card">
                        {cards.map((card, i) => {
                            return (
                                <div key={i} className="col-md mb-4 mb-md-0" data-aos="zoom-in">
                                    <Card 
                                        image={card.image} 
                                        title={card.title} 
                                        description={card.description} 
                                        link={card.link}
                                        videoLightbox={card.videoLightbox}
                                        noborder={noborder} />
                                </div>
                            );
                        })}
                    </div>
                : ''}
            </div>
        </section>
    );
  }
  
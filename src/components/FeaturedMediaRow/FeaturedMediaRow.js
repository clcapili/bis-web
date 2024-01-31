import { Heading, Image } from 'components';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * Render the FeaturedMediaRow component.
 *
 * @return {React.ReactElement} The FeaturedMediaRow component.
 */
 export default function FeaturedMediaRow({ title, mediaImages}) {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    return (
        <section className="featured-media">
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
                
                {!!mediaImages &&
                    <div className="row">
                        {mediaImages.map((mediaImage, i) => {
                            return (
                                <div key={i} className="col-md-2 col-4 mb-3">
                                    <Image image={mediaImage.image} alt={mediaImage.image.altText} data-aos="zoom-in" />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        </section>
    );
  }
  
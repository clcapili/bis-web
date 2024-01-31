import { Heading, Image } from 'components';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * Render the BookCTA component.
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.image
 * @param {string} props.pretitle
 * @param {object} props.logos
 * 
 * 
 * @return {React.ReactElement} The BookCTA component.
 */
 export default function BookCTA({ title, description, image, pretitle, logos }) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    return (
        <section className="book-cta">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {!!title &&
                            <div className="mb-3">
                                <Heading level="h2">{title}</Heading>
                            </div>
                        }
                        {!!description &&
                            <div className="lead fw-light" dangerouslySetInnerHTML={{__html: description}}></div>
                        }
                    </div>
                </div>

                <div className="mb-5"></div>

                <div className="row">
                    <div className="col-md-6">
                        {!!image &&
                            <Image image={image} alt={image.altText} data-aos="zoom-in" />
                        }
                    </div>
                    <div className="col-md-6">
                        {!!pretitle &&
                            <div className="mb-4">
                                <p>{pretitle}</p>
                            </div>
                        }
                        {logos ?
                            <div className="row">
                                {logos.map((logo, i) => {

                                    if(logo.link && logo.link.url != undefined) {
                                        return (
                                            <div className="col-4" key={i}>
                                                <Link href={logo.link.url}>
                                                    <a target={logo.link.target}>
                                                        {!!logo.logo &&
                                                            <Image image={logo.logo} alt={logo.logo.altText} data-aos="zoom-in" />
                                                        }
                                                    </a>
                                                </Link>
                                            </div>
                                        );   
                                    }
                                })}
                            </div>
                        : ''}
                    </div>
                </div>
            </div>
        </section>
    );

}
  
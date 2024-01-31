import { Heading, Image } from 'components';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * Render the CTA component.
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.link
 * @param {object} props.image
 * 
 * 
 * @return {React.ReactElement} The CTA component.
 */
 export default function CTA({ title, description, link, image}) {
  
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    let linkUrl = undefined;

    if(link && link.url != undefined) {
        linkUrl = link.url;
    }

    return (
        <section className="cta">
            <div className="container">
                <div className="card" data-aos="fade-up">
                    <div className="card-body">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                                {!!image &&
                                    <Image image={image} alt={image.altText} />
                                }
                            </div>
                            <div className="col-md-6">
                                {!!title &&
                                    <Heading level="h2">{title}</Heading>
                                }
                                {!!description &&
                                    <p>{description}</p>
                                }
                                {!!linkUrl && 
                                    <Link href={linkUrl}>
                                        <a className="btn btn-outline-primary">{link.title}</a>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
  
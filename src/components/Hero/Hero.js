import { Heading, Image } from 'components';
import SVGAnimation from 'components/SVGAnimation';
import Link from 'next/link';

/**
 * Render the Hero component.
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.link
 * @param {object} props.staticImage
 * @param {object} props.image
 * 
 * @return {React.ReactElement} The Hero component.
 */
 export default function Hero({ title, description, link, staticImage, image }) {

    let linkUrl = undefined;
    
    if(link && link.url != undefined) {
        linkUrl = link.url;
    }

    return (
        <section className="hero">
            <div className="container">
                <div className="row flex-md-row-reverse align-items-center">
                    <div className="col-md-6">
                        {!!staticImage &&
                            <Image image={staticImage} alt={staticImage.altText} data-aos="zoom-in" />
                        }
                        {!!image && 
                            <SVGAnimation file={image} id={'hero-svg-animation'}></SVGAnimation>
                        }
                    </div>
                    <div className="col-md-6">
                        {!!title &&
                            <div className="mb-2">
                                <Heading>{title}</Heading>
                            </div>
                        }
                        {!!description && 
                            <div className="mb-3">
                                <div className="lead fw-light" dangerouslySetInnerHTML={{__html: description}}></div>
                            </div>
                        }
                        {!!linkUrl && 
                            <Link href={linkUrl}>
                                <a className="btn btn-primary">{link.title}</a>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
  
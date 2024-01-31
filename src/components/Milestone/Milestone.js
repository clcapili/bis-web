import { Heading, Image } from 'components';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * Render the Milestone component.
 * 
 * @param {Props} props The props object.
 * @param {string} props.date
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.image
 * 
 * @return {React.ReactElement} The Milestone component.
 */
 export default function Milestone({ date, title, description, image }) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-lg-2">
                    {!!date &&
                        <p className="lead">{date}</p>
                    }
                </div>
                <div className="col-lg-6">
                    {!!title &&
                        <Heading level="h2" className="mb-2">{title}</Heading>
                    }
                    {!!description &&
                        <p>{description}</p>
                    }
                </div>
                <div className="col-lg-4">
                    {!!image && 
                        <div className="card card-border-none" data-aos="zoom-in">
                            <div className="card-body py-0">
                                <Image image={image} alt={image.altText} layout="responsive" className="card-img-top" />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );

}
  
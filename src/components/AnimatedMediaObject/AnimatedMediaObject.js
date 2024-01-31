import { Heading } from 'components';
import SVGAnimation from 'components/SVGAnimation';
import { classNames as cn } from 'utils';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * Render the AnimatedMediaObject component.
 * 
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.image
 * 
 * 
 * @return {React.ReactElement} The AnimatedMediaObject component.
 */
 export default function AnimatedMediaObject({ id, title, description, image, classNames }) {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    let animatedMediaClassNames = cn([
        'row', classNames
    ]);

    return (
        <div className="mb-5">
            <div className={animatedMediaClassNames}>
                <div className="col-md-6" data-aos="fade-up">
                    {!!title &&
                        <Heading level="h2" className="mb-2">{title}</Heading>
                    }
                    {!!description &&
                        <div dangerouslySetInnerHTML={{__html: description}}></div>
                    }
                </div>
                <div className="col-md-6">
                    {!!image && 
                        <div className="mt-3 mt-md-0">
                            <SVGAnimation file={image} id={id}></SVGAnimation>
                        </div>
                    }
                </div>
            </div>
        </div>
    );

}
  
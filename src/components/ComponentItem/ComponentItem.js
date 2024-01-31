import { Heading, Image } from 'components';
import { useEffect } from 'react';
import AOS from "aos";

/**
 * Render the ComponentItem component.
 * 
 * @param {Props} props The props object.
 * @param {string} props.title
 * @param {string} props.description
 * @param {object} props.image
 * @param {object} props.components
 * 
 * @return {React.ReactElement} The ComponentItem component.
 */
 export default function ComponentItem({ component }) {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800
        });
        AOS.refresh();
      }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="mb-4">
                        {!!component.title &&
                            <Heading level="h2">{component.title}</Heading>
                        }
                        {!!component.description &&
                            <div dangerouslySetInnerHTML={{__html: component.description}}></div>
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    {!!component.image &&
                        <div className="mb-4 mb-md-0">
                            <Image image={component.image} alt={component.altText} data-aos="zoom-in" />
                        </div>
                    }
                </div>
            </div>
            {component.subComponents ? 
                <div className="row">
                    <div className="col">
                        {component?.subComponents.map((subcomponentItem, i) => {
                            return (
                                <div className="row" key={i}>
                                    <div className="col-md-8">
                                        <div className="mb-4 ms-5">
                                            {!!subcomponentItem.title &&
                                                <Heading level="h3">{subcomponentItem.title}</Heading>
                                            }
                                            {!!subcomponentItem.description &&
                                                <p>{subcomponentItem.description}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        {!!subcomponentItem.image &&
                                            <div className="mb-4 mb-md-0">
                                                <Image image={subcomponentItem.image} alt={subcomponentItem.image.altText} data-aos="zoom-in" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            : ''}
        </div>
    );

}
  